import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import {
  outputDir,
  routes,
  htmlPathForRoute,
  loadRoute,
} from "../helpers/rendered";

/**
 * Ticket 1 — the conformance harness ships with smoke assertions only: the
 * static build succeeds and every current route renders a real page. Later
 * tickets assert page-scoped content through the same `loadRoute` seam.
 */
describe("conformance harness — smoke", () => {
  it("produced a static build output directory", () => {
    expect(existsSync(outputDir)).toBe(true);
  });

  it.each(routes)("renders a real page for %s", async (route) => {
    const page = await loadRoute(route);

    // A real HTML document, not an empty file or an error stub.
    expect(page.html).toMatch(/<html[\s>]/i);
    expect(page.root.querySelector("title")?.text.trim()).toBeTruthy();

    // The visitor sees actual rendered content, not a blank shell.
    expect(page.text.length).toBeGreaterThan(50);
  });

  it("reads real files — an unrendered route has no page", async () => {
    // Guards against a vacuous green: if the harness silently returned empty
    // pages, a broken build would still pass. A route that was never
    // generated must reject.
    expect(htmlPathForRoute("/does-not-exist")).toContain("does-not-exist");
    await expect(loadRoute("/does-not-exist")).rejects.toThrow(
      /No pre-rendered page/,
    );
  });
});
