import { describe, expect, it } from "vitest";
import { loadRoute, mainOf, mainText } from "../helpers/rendered";

/**
 * Ticket 2 — Home page rebuild. Asserts over the pre-rendered home page the way
 * a vetter sees it (CONTEXT.md is binding). Everything is scoped to `<main>` so
 * these home-only rules never collide with the shared nav/footer, which are
 * owned by tickets 6 and 8.
 */

const norm = (s: string): string => s.replace(/\s+/g, " ").trim();

describe("conformance — home page (ticket 2)", () => {
  it("leads with the Spearhead on the first screen", async () => {
    const home = await loadRoute("/");

    // "First screen" over static HTML: the Spearhead must live in the hero —
    // the first <section> of the page's own content, above everything else.
    const hero = mainOf(home).querySelector("section");
    expect(hero, "the home page should open with a hero <section>").toBeTruthy();
    const heroText = norm(hero!.structuredText);

    expect(heroText).toContain("Senior full-stack engineer");
    expect(heroText).toContain("C#/.NET, JavaScript/TypeScript, Azure");
    expect(heroText).toContain("owning delivery from database to cloud to CI/CD");
  });

  it("shows the owner's real name and photo, in a first-person voice", async () => {
    const home = await loadRoute("/");
    const main = mainOf(home);
    const text = mainText(home);

    expect(text).toContain("Jon Lombard");

    // A real photo the vetter can match to the person — with the owner's name
    // as alt text (its job is verification, per DESIGN_SYSTEM.md).
    const img = main.querySelector("img");
    expect(img, "the home page should render the owner's photo").toBeTruthy();
    expect(img!.getAttribute("src") ?? "").toMatch(
      /\.(jpe?g|png|webp|avif)(\?|$)/i,
    );
    expect(img!.getAttribute("alt") ?? "").toMatch(/Jon Lombard/i);

    // First-person voice: the copy speaks as "I", never an anonymous "we".
    expect(text).toMatch(/\bI\b/);
  });

  it("carries no team language, testimonials, or 'Our Mission' framing", async () => {
    const home = await loadRoute("/");
    const text = mainText(home);
    const main = mainOf(home);

    // No anonymous "we"/"our" — a solo engineer speaks in the first person.
    expect(text).not.toMatch(/\bwe\b/i);
    expect(text).not.toMatch(/\bour\b/i);

    // No agency positioning or abandoned small-business target market.
    expect(text).not.toMatch(/\bagency\b/i);
    expect(text).not.toMatch(/small business(es)?|start[- ]?ups?/i);

    // No invented testimonials or unverifiable metrics.
    expect(text).not.toMatch(/testimonial/i);
    expect(text).not.toMatch(/what our clients say/i);
    expect(text).not.toMatch(/\d+\s?%/); // e.g. the retired "increased leads by 40%"

    // No "AI-powered"/"AI-first" branding anywhere on Home.
    expect(text).not.toMatch(/ai[-\s]?(powered|first)/i);

    // The Mission surfaces only as first-person copy — never a framed box.
    expect(text).not.toMatch(/our mission/i);
    const headings = main
      .querySelectorAll("h1, h2, h3, h4")
      .map((h) => norm(h.text).toLowerCase());
    expect(headings).not.toContain("mission");
    expect(headings).not.toContain("our mission");
  });

  it("renders a structural, placeholder-free Proof container that is empty until ticket 7", async () => {
    const home = await loadRoute("/");
    const main = mainOf(home);

    const proof = main.querySelector("#proof");
    expect(proof, "Home should carry a Proof section (#proof)").toBeTruthy();

    // Empty until ticket 7 supplies real case notes: the container exists so
    // notes slot in without restructuring, but nothing is invented yet.
    expect(
      proof!.querySelectorAll("[data-proof-item]").length,
      "Proof must ship empty — no invented case notes before ticket 7",
    ).toBe(0);

    // No placeholder cruft standing in for the absent proof.
    expect(norm(proof!.structuredText)).not.toMatch(
      /coming soon|placeholder|lorem ipsum|todo/i,
    );
  });

  it("points the visitor to Small Builds", async () => {
    const home = await loadRoute("/");
    const main = mainOf(home);

    const pointsToSmallBuilds = main
      .querySelectorAll("a")
      .some((a) => (a.getAttribute("href") ?? "").includes("/small-builds"));
    expect(
      pointsToSmallBuilds,
      "Home should carry a pointer linking to Small Builds",
    ).toBe(true);
  });
});
