import { describe, expect, it } from "vitest";
import {
  loadRoute,
  routes,
  navOf,
  navText,
  footerOf,
  footerText,
} from "../helpers/rendered";

/**
 * Ticket 6 — Global chrome: navigation, footer, brand. The shared nav and
 * footer are the same on every page, so these assertions run across every route
 * (including the redirect stubs and the not-yet-purged legacy pages, whose own
 * `<main>` content tickets 7/8 still own). They read only the chrome — `<nav>`
 * and `<footer>` — never a page's `<main>`, mirroring how tickets 2–5 scoped the
 * other way around. CONTEXT.md is binding.
 */

/** The four — and only four — destinations, as rendered `href`s. */
const NAV_DESTINATIONS = ["/", "/small-builds", "/about", "/contact"];

/** Agency-era routes that must never appear in the nav again. */
const RETIRED_ROUTES = ["/services", "/portfolio"];

/** The registered legal name — the sole place "Web Agency" may appear. */
const LEGAL_NAME = "IntegraBlue Web Agency Limited";

/** Normalise an href to a comparable path: drop a trailing slash, keep root. */
const normalizeHref = (href: string): string =>
  href.replace(/\/+$/, "") === "" ? "/" : href.replace(/\/+$/, "");

const countMatches = (text: string, re: RegExp): number =>
  (text.match(re) ?? []).length;

describe("conformance — global navigation (ticket 6)", () => {
  it.each(routes)(
    "shows exactly the four new destinations, and no retired route, on %s",
    async (route) => {
      const nav = navOf(await loadRoute(route));

      const hrefs = new Set(
        nav
          .querySelectorAll("a[href]")
          .map((a) => normalizeHref(a.getAttribute("href") ?? ""))
          .filter(Boolean),
      );

      // The wordmark links to "/" (Home's destination), so the full set of nav
      // link targets is exactly the four destinations — nothing more.
      expect([...hrefs].sort()).toEqual([...NAV_DESTINATIONS].sort());

      for (const retired of RETIRED_ROUTES) {
        expect(
          hrefs.has(retired),
          `nav must not link to the retired route ${retired}`,
        ).toBe(false);
      }
    },
  );

  it.each(routes)(
    "labels the four destinations and drops the agency-era entries, on %s",
    async (route) => {
      const nav = navText(await loadRoute(route));

      for (const label of ["Home", "Small builds", "About", "Contact"]) {
        expect(nav).toContain(label);
      }
      expect(nav).not.toMatch(/\bServices\b/i);
      expect(nav).not.toMatch(/\bPortfolio\b/i);
    },
  );
});

describe("conformance — global footer & brand (ticket 6)", () => {
  it.each(routes)(
    "carries the registered legal name on %s",
    async (route) => {
      const page = await loadRoute(route);

      expect(footerText(page)).toContain(LEGAL_NAME);

      // Isolated in a marked region so the "Web Agency" exception is scoped.
      const legal = footerOf(page).querySelector("[data-legal-name]");
      expect(legal, "footer should mark its legal-name region").toBeTruthy();
      expect(legal!.structuredText.replace(/\s+/g, " ")).toContain(LEGAL_NAME);
    },
  );

  it.each(routes)(
    "confines 'Web Agency'/'agency' to the footer legal line on %s",
    async (route) => {
      const page = await loadRoute(route);

      // The nav wordmark is plain "IntegraBlue" — no agency language at all.
      const nav = navText(page);
      expect(nav).toMatch(/Integra\s*Blue/i);
      expect(nav).not.toMatch(/agency/i);

      // In the footer, every "Web Agency"/"agency" occurrence lives inside the
      // legal-name region and nowhere else. Counting (rather than mutating the
      // cached DOM) proves the exception is confined without side effects.
      const footerAll = footerText(page);
      const legalText = (
        footerOf(page).querySelector("[data-legal-name]")?.structuredText ?? ""
      ).replace(/\s+/g, " ");

      const webAgency = /web agency/gi;
      const anyAgency = /agency/gi;

      expect(countMatches(legalText, /web agency/gi)).toBeGreaterThan(0);
      expect(countMatches(footerAll, webAgency)).toBe(
        countMatches(legalText, /web agency/gi),
      );
      expect(countMatches(footerAll, anyAgency)).toBe(
        countMatches(legalText, /agency/gi),
      );
    },
  );
});
