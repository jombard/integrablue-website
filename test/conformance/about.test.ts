import { describe, expect, it } from "vitest";
import { loadRoute, mainOf, mainText } from "../helpers/rendered";

/**
 * Ticket 4 — About page rebuild. Asserts over the pre-rendered About page the
 * way a vetting visitor reads it (CONTEXT.md is binding). Everything is scoped
 * to `<main>` so these page-only rules never collide with the still-legacy
 * nav/footer, which tickets 6 and 8 own.
 */

/**
 * The one-line AI tooling stance, verbatim from CONTEXT.md. The em-dash and
 * straight apostrophe must survive into the rendered copy exactly.
 */
const AI_STANCE =
  "I use modern AI tooling in my own work; on client engagements I follow your AI policy — client code never goes anywhere you haven't approved";

/** The retired agency template's six-value grid — gone from this page. */
const RETIRED_VALUES = [
  "Passion for Quality",
  "Client Partnership",
  "Innovation",
  "Transparency",
  "Reliability",
  "Continuous Learning",
];

describe("conformance — About page (ticket 4)", () => {
  it("tells the real story first-person, with no agency founding story or team language", async () => {
    const page = await loadRoute("/about");
    const text = mainText(page);

    // A named person speaks in the first person.
    expect(text).toMatch(/\bI\b/);
    expect(text).not.toMatch(/\bwe\b/i);
    expect(text).not.toMatch(/\bour\b/i);

    // No agency positioning or the abandoned small-business target market.
    expect(text).not.toMatch(/\bagency\b/i);
    expect(text).not.toMatch(/small business(es)?|start[- ]?ups?/i);

    // The invented agency founding story is gone.
    expect(text).not.toMatch(/founded in \d{4}/i);
    expect(text).not.toMatch(/small team of (developers|designers)/i);

    // The real story: a senior engineer embedded in corporate delivery.
    expect(text).toMatch(/senior full-stack engineer/i);
    expect(text).toMatch(/embedded/i);
  });

  it("expresses the four values as behaviours in prose, not a grid", async () => {
    const page = await loadRoute("/about");
    const text = mainText(page);

    // 1. Own it end-to-end — schema through pipeline through prod incident.
    expect(text).toMatch(/end-to-end/i);
    expect(text).toMatch(/pipeline/i);
    expect(text).toMatch(/production incident|prod incident/i);

    // 2. Straight answers — honest scoping/capacity, even when it loses work.
    expect(text).toMatch(/straight/i);

    // 3. Learn what the problem needs.
    expect(text).toMatch(/learn/i);
    expect(text).toMatch(/the problem needs/i);

    // 4. Personal, not corporate — the named person who both sells and builds.
    expect(text).toMatch(/the senior you meet is the one who builds/i);

    // The retired six-value grid — content and framing — is gone.
    for (const value of RETIRED_VALUES) {
      expect(text).not.toMatch(new RegExp(value, "i"));
    }
    expect(text).not.toMatch(/our values|company values|core values/i);

    // Breadth is supporting evidence under the Spearhead, never the banner.
    expect(text).not.toMatch(/no tech off limits/i);
    expect(text).not.toMatch(/\bpolyglot\b/i);
    const banner = mainOf(page).querySelector("h1");
    expect(banner, "About should carry an <h1>").toBeTruthy();
    expect(banner!.structuredText).not.toMatch(/fast learner/i);
  });

  it("carries the UK remote-first statement verbatim", async () => {
    const page = await loadRoute("/about");
    const text = mainText(page);

    expect(text).toMatch(
      /working remotely with teams anywhere in the UK;?\s*on-site by arrangement/i,
    );
  });

  it("carries the AI tooling stance line verbatim, and makes no other AI claims", async () => {
    const page = await loadRoute("/about");
    const text = mainText(page);

    expect(text).toContain(AI_STANCE);

    // No unverifiable AI branding beyond the one-line tooling stance.
    expect(text).not.toMatch(/ai[-\s]?(powered|first|driven|native|enabled)/i);
  });

  it("carries no certification content", async () => {
    const page = await loadRoute("/about");
    const text = mainText(page);

    expect(text).not.toMatch(/certif/i); // certification, certified, certificate
    expect(text).not.toMatch(/\bAZ-\d{3}\b/i); // e.g. AZ-204
    expect(text).not.toMatch(/\bAI-200\b/i);
    expect(text).not.toMatch(/\bcredential/i);
  });

  it("keeps CONTEXT.md's voice: no testimonials, honest availability", async () => {
    const page = await loadRoute("/about");
    const text = mainText(page);

    expect(text).not.toMatch(/testimonial/i);
    expect(text).not.toMatch(/what (my|our) clients say/i);
    expect(text).not.toMatch(/\d+\s?%/); // no invented metrics

    // The retired availability promises must not resurface here.
    expect(text).not.toMatch(/24[-\s]?hour/i);
    expect(text).not.toMatch(/business hours/i);
    expect(text).not.toMatch(/free consultation/i);
  });
});
