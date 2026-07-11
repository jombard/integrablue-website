import { describe, expect, it } from "vitest";
import { loadRoute, mainOf, mainText } from "../helpers/rendered";

/**
 * Ticket 3 — Small Builds page + services redirect. Asserts over the
 * pre-rendered output the way a self-qualifying enquirer sees it (CONTEXT.md is
 * binding). Page copy is scoped to `<main>` so these page-only rules never
 * collide with the still-legacy nav/footer, which tickets 6 and 8 own.
 */

describe("conformance — Small Builds page (ticket 3)", () => {
  it("states the scope cap, timeline, process, and over-cap policy honestly", async () => {
    const page = await loadRoute("/small-builds");
    const text = mainText(page);

    // Scope cap — the ~10-effort-day ceiling that does the qualifying.
    expect(text).toMatch(/(ten|10)\s*effort-days?/i);

    // Timeline — delivered over 4–8 calendar weeks, in side capacity.
    expect(text).toMatch(/(four to eight|4\s*[–—-]\s*8)\s*(calendar\s*)?weeks/i);

    // Process — short free scoping call → fixed quote before work → build.
    expect(text).toMatch(/scoping call/i);
    expect(text).toMatch(/fixed quote/i);
    expect(text).toMatch(/before (any |the )?work starts/i);

    // Over-cap policy — a phase-one counter-offer or an honest referral.
    expect(text).toMatch(/phase one|phase[- ]?1/i);
    expect(text).toMatch(/referr?al|refer (it|you|them)/i);
  });

  it("publishes no pricing, rate, or budget figures", async () => {
    const page = await loadRoute("/small-builds");
    const text = mainText(page);

    expect(text).not.toMatch(/[£$€]/); // no currency figures anywhere
    expect(text).not.toMatch(/\bbudget\b/i); // no agency-era budget bands
    expect(text).not.toMatch(/day rate|per day|per hour|hourly|\/\s*(day|hr|hour)/i);
    expect(text).not.toMatch(/\d+\s?%/); // no invented metrics
  });

  it("qualifies by problem shape, never by buyer size", async () => {
    const page = await loadRoute("/small-builds");
    const text = mainText(page);

    expect(text).not.toMatch(/small business(es)?/i);
    expect(text).not.toMatch(/start[- ]?ups?/i);
    expect(text).not.toMatch(/\bSMEs?\b/);
    expect(text).not.toMatch(/enterprise/i);
    expect(text).not.toMatch(/growing business(es)?/i);
    expect(text).not.toMatch(
      /(company|organisation|organization|business|team)\s+size/i,
    );
  });

  it("shows concrete examples of qualifying builds", async () => {
    const page = await loadRoute("/small-builds");
    const main = mainOf(page);
    const text = mainText(page);

    // The three shapes CONTEXT.md names.
    expect(text).toMatch(/website/i);
    expect(text).toMatch(/integration/i);
    expect(text).toMatch(/automation/i);

    // Rendered as discrete, concrete examples — not just a passing mention.
    expect(
      main.querySelectorAll("[data-example]").length,
      "at least three concrete build examples should be shown",
    ).toBeGreaterThanOrEqual(3);
  });

  it("keeps CONTEXT.md's voice: first-person, no agency/team language", async () => {
    const page = await loadRoute("/small-builds");
    const text = mainText(page);

    expect(text).toMatch(/\bI\b/); // a named person speaks
    expect(text).not.toMatch(/\bwe\b/i);
    expect(text).not.toMatch(/\bour\b/i);
    expect(text).not.toMatch(/\bagency\b/i);
    expect(text).not.toMatch(/testimonial/i);
    expect(text).not.toMatch(/ai[-\s]?(powered|first)/i);

    // No availability promise beyond the scoping call (Contact owns the reply
    // commitment); the retired agency promises must not resurface here.
    expect(text).not.toMatch(/24[-\s]?hour/i);
    expect(text).not.toMatch(/business hours/i);
    expect(text).not.toMatch(/free consultation/i);
  });
});

describe("conformance — retired services route (ticket 3)", () => {
  it("serves a redirect stub to Small Builds, not a 404", async () => {
    const page = await loadRoute("/services"); // rejects if the route 404s

    // Meta-refresh so the stub redirects even without JavaScript.
    const refresh = page.root
      .querySelectorAll("meta")
      .find(
        (m) => (m.getAttribute("http-equiv") ?? "").toLowerCase() === "refresh",
      );
    expect(refresh, "services stub should carry a meta-refresh").toBeTruthy();
    expect(refresh!.getAttribute("content") ?? "").toMatch(
      /url=\/small-builds\/?/i,
    );

    // Canonical points at the new home for this content.
    const canonical = page.root.querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute("href") ?? "").toMatch(/\/small-builds\/?$/);

    // A real, followable link for a no-JS visitor — the stub is not a dead end.
    const linksToSmallBuilds = mainOf(page)
      .querySelectorAll("a")
      .some(
        (a) =>
          (a.getAttribute("href") ?? "").replace(/\/$/, "") === "/small-builds",
      );
    expect(linksToSmallBuilds, "stub should link to /small-builds").toBe(true);

    // The retired agency services content is gone.
    expect(mainText(page)).not.toMatch(/what we offer|web design|our services/i);
  });
});
