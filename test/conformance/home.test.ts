import { describe, expect, it } from "vitest";
import { loadRoute, mainOf, mainText } from "../helpers/rendered";

/**
 * Home page copy. Asserts over the pre-rendered home page the way a visitor
 * sees it. Everything is scoped to `<main>` so these home-only rules never
 * collide with the shared nav/footer.
 */

const norm = (s: string): string => s.replace(/\s+/g, " ").trim();

describe("conformance — home page (ticket 2)", () => {
  it("leads with the company and the owner on the first screen", async () => {
    const home = await loadRoute("/");

    const hero = mainOf(home).querySelector("section");
    expect(hero, "the home page should open with a hero <section>").toBeTruthy();
    const heroText = norm(hero!.structuredText);

    expect(heroText).toMatch(/IntegraBlue/i);
    expect(heroText).toMatch(/one-person consultancy/i);
    expect(heroText).toMatch(/independent senior developer/i);
    expect(heroText).toMatch(/modernis/i);
  });

  it("shows the owner's real name and photo, in a first-person voice", async () => {
    const home = await loadRoute("/");
    const main = mainOf(home);
    const text = mainText(home);

    expect(text).toContain("Jon Lombard");

    const img = main.querySelector("img");
    expect(img, "the home page should render the owner's photo").toBeTruthy();
    expect(img!.getAttribute("src") ?? "").toMatch(
      /\.(jpe?g|png|webp|avif)(\?|$)/i,
    );
    expect(img!.getAttribute("alt") ?? "").toMatch(/Jon Lombard/i);

    expect(text).toMatch(/\bI\b/);
  });

  it("carries no team language, testimonials, or 'Our Mission' framing", async () => {
    const home = await loadRoute("/");
    const text = mainText(home);
    const main = mainOf(home);

    expect(text).not.toMatch(/\bwe\b/i);
    expect(text).not.toMatch(/\bour\b/i);

    expect(text).not.toMatch(/\bagency\b/i);
    expect(text).not.toMatch(/small business(es)?|start[- ]?ups?/i);

    expect(text).not.toMatch(/testimonial/i);
    expect(text).not.toMatch(/what our clients say/i);
    expect(text).not.toMatch(/trusted by/i);
    expect(text).not.toMatch(/\d+\s?%/);

    expect(text).not.toMatch(/ai[-\s]?(powered|first)/i);

    expect(text).not.toMatch(/our mission/i);
    const headings = main
      .querySelectorAll("h1, h2, h3, h4")
      .map((h) => norm(h.text).toLowerCase());
    expect(headings).not.toContain("mission");
    expect(headings).not.toContain("our mission");
  });

  it("renders a Proof section with a few anonymised examples", async () => {
    const home = await loadRoute("/");
    const main = mainOf(home);
    const proof = main.querySelector("#proof");
    expect(proof, "Home should carry a Proof section (#proof)").toBeTruthy();

    const items = proof!.querySelectorAll("[data-proof-item]");
    expect(
      items.length,
      "Proof should carry two or three short anonymised examples",
    ).toBeGreaterThanOrEqual(2);
    expect(items.length).toBeLessThanOrEqual(3);

    const proofText = norm(proof!.structuredText);
    expect(proofText).not.toMatch(
      /coming soon|placeholder|lorem ipsum|todo/i,
    );
    expect(proofText).not.toMatch(/\d+\s?%/);
    expect(proofText).not.toMatch(/zero downtime|zero breakage/i);
    expect(proofText).toMatch(/\.NET Framework/i);
    expect(proofText).toMatch(/Azure/i);
    expect(proofText).toMatch(/lasagna/i);
  });

  it("points the visitor to a conversation, and still to Small Builds", async () => {
    const home = await loadRoute("/");
    const main = mainOf(home);
    const text = mainText(home);

    expect(text).toMatch(/Discuss your project/i);

    const hrefs = main
      .querySelectorAll("a")
      .map((a) => a.getAttribute("href") ?? "");
    expect(
      hrefs.some((href) => href.includes("/contact")),
      "Home should link to Contact",
    ).toBe(true);
    expect(
      hrefs.some((href) => href.includes("/small-builds")),
      "Home should still carry a pointer linking to Small Builds",
    ).toBe(true);
  });
});
