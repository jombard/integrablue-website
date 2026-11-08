import { describe, expect, it } from "vitest";
import { loadRoute, mainOf, mainText } from "../helpers/rendered";

/**
 * About page copy. Asserts over the pre-rendered About page the way a
 * visitor reads it. Everything is scoped to `<main>` so these page-only
 * rules never collide with the shared nav/footer.
 */

const AI_STANCE =
  "I use modern AI tooling in my own work. On client engagements I follow your AI policy: client code never goes anywhere you haven't approved";

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

    expect(text).toMatch(/\bI\b/);
    expect(text).not.toMatch(/\bwe\b/i);
    expect(text).not.toMatch(/\bour\b/i);

    expect(text).not.toMatch(/\bagency\b/i);
    expect(text).not.toMatch(/small business(es)?|start[- ]?ups?/i);

    expect(text).not.toMatch(/founded in \d{4}/i);
    expect(text).not.toMatch(/small team of (developers|designers)/i);

    expect(text).toMatch(/independent senior developer/i);
    expect(text).toMatch(/one-person/i);
    expect(text).toMatch(/2007/);
    expect(text).toMatch(/2014/);
    expect(text).not.toMatch(/founding date/i);
  });

  it("expresses the four values as behaviours in prose, not a grid", async () => {
    const page = await loadRoute("/about");
    const text = mainText(page);

    expect(text).toMatch(/end-to-end/i);
    expect(text).toMatch(/pipeline/i);
    expect(text).toMatch(/production incident|prod incident/i);

    expect(text).toMatch(/straight/i);

    expect(text).toMatch(/learn/i);
    expect(text).toMatch(/the problem needs/i);

    expect(text).toMatch(/the senior you meet is the one who builds/i);

    for (const value of RETIRED_VALUES) {
      expect(text).not.toMatch(new RegExp(value, "i"));
    }
    expect(text).not.toMatch(/our values|company values|core values/i);

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

  it("carries the AI tooling stance, agent coding, and a selection of tools", async () => {
    const page = await loadRoute("/about");
    const text = mainText(page);

    expect(text).toContain(AI_STANCE);

    expect(text).not.toMatch(/ai[-\s]?(powered|first|driven|native|enabled)/i);

    expect(text).toMatch(/agentic coding/i);
    expect(text).toMatch(/software factory/i);
    expect(text).toMatch(/engineering responsibility/i);

    expect(text).toMatch(/C#/);
    expect(text).toMatch(/SQL Server/i);
    expect(text).toMatch(/JavaScript/i);
    expect(text).toMatch(/TypeScript/i);
    expect(text).toMatch(/Vue/i);
    expect(text).toMatch(/Azure DevOps/i);
  });

  it("carries no certification content", async () => {
    const page = await loadRoute("/about");
    const text = mainText(page);

    expect(text).not.toMatch(/certif/i);
    expect(text).not.toMatch(/\bAZ-\d{3}\b/i);
    expect(text).not.toMatch(/\bAI-200\b/i);
    expect(text).not.toMatch(/\bcredential/i);
  });

  it("keeps a modest voice: no testimonials, honest availability", async () => {
    const page = await loadRoute("/about");
    const text = mainText(page);

    expect(text).not.toMatch(/testimonial/i);
    expect(text).not.toMatch(/what (my|our) clients say/i);
    expect(text).not.toMatch(/trusted by/i);
    expect(text).not.toMatch(/\d+\s?%/);

    expect(text).not.toMatch(/24[-\s]?hour/i);
    expect(text).not.toMatch(/business hours/i);
    expect(text).not.toMatch(/free consultation/i);
  });
});
