import { describe, expect, it } from "vitest";
import { loadRoute, mainOf, mainText } from "../helpers/rendered";

/**
 * Ticket 5 — Contact rebuild. Asserts over the pre-rendered Contact page the
 * way a Side Project enquirer actually uses it (CONTEXT.md is binding).
 * Everything is scoped to `<main>` so these page-only rules never collide with
 * the still-legacy nav/footer, which tickets 6 and 8 own.
 */

/** Exactly the fields the spec allows — a problem described in the enquirer's
 * own words, plus how to reach them. Nothing else. */
const EXPECTED_FIELDS = [
  "name",
  "email",
  "company",
  "message",
  "timeline",
  "referral",
].sort();

/** The agency-era controls that must be gone from the funnel. */
const RETIRED_FIELDS = ["firstName", "lastName", "phone", "projectType", "budget"];

describe("conformance — Contact page (ticket 5)", () => {
  it("renders exactly the new field set — no service-type or budget controls", async () => {
    const page = await loadRoute("/contact");
    const form = mainOf(page).querySelector("form");
    expect(form, "Contact should render a <form>").toBeTruthy();

    // Formspree control fields (leading underscore) are not part of "the field
    // set" the enquirer fills in, so they're excluded from the equality check.
    const named = form!
      .querySelectorAll("input[name], textarea[name], select[name]")
      .map((el) => el.getAttribute("name") ?? "")
      .filter((n) => n && !n.startsWith("_"));

    expect([...new Set(named)].sort()).toEqual(EXPECTED_FIELDS);

    // The agency-era enums/bands are gone by name...
    for (const field of RETIRED_FIELDS) {
      expect(named, `retired field "${field}" must be gone`).not.toContain(field);
    }
    // ...and structurally: the new form has no dropdowns at all.
    expect(
      form!.querySelectorAll("select").length,
      "the rebuilt form uses free text, not agency-era category dropdowns",
    ).toBe(0);

    // The problem is described in free text, not picked from a category list.
    expect(
      form!.querySelector("textarea[name='message']"),
      "a free-text problem description should be present",
    ).toBeTruthy();
  });

  it("posts to the existing external form endpoint", async () => {
    const page = await loadRoute("/contact");
    const form = mainOf(page).querySelector("form");

    // A real, no-JS-safe post target: the Formspree endpoint, method POST.
    expect(form!.getAttribute("action") ?? "").toMatch(/formspree\.io\/f\//i);
    expect((form!.getAttribute("method") ?? "").toLowerCase()).toBe("post");
  });

  it("carries no budget bands or agency service-category copy", async () => {
    const page = await loadRoute("/contact");
    const text = mainText(page);

    expect(text).not.toMatch(/[£$€]/); // no dollar budget bands
    expect(text).not.toMatch(/\bbudget\b/i);
    expect(text).not.toMatch(/project type|service type/i);
  });

  it("states exactly the two commitments and none of the retired promises", async () => {
    const page = await loadRoute("/contact");
    const text = mainText(page);

    // 1. A personal reply, usually within two working days.
    expect(text).toMatch(/reply personally/i);
    expect(text).toMatch(/two working days/i);

    // 2. A free scoping call as step one of every fixed quote.
    expect(text).toMatch(/scoping call/i);
    expect(text).toMatch(/fixed quote/i);

    // The retired agency availability promises must not resurface.
    expect(text).not.toMatch(/24[-\s]?hour/i);
    expect(text).not.toMatch(/business hours/i);
    expect(text).not.toMatch(/free consultation/i);
    expect(text).not.toMatch(/monday\s*[–—-]\s*friday/i);
  });

  it("keeps CONTEXT.md's voice: first-person, no agency/team language", async () => {
    const page = await loadRoute("/contact");
    const text = mainText(page);

    expect(text).toMatch(/\bI\b/); // a named person speaks
    expect(text).not.toMatch(/\bwe\b/i);
    expect(text).not.toMatch(/\bour\b/i);
    expect(text).not.toMatch(/\bagency\b/i);
    expect(text).not.toMatch(/small business(es)?|start[- ]?ups?/i);
    expect(text).not.toMatch(/testimonial/i);
    expect(text).not.toMatch(/ai[-\s]?(powered|first)/i);
  });
});
