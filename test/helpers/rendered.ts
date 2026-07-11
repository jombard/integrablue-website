import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { parse, type HTMLElement } from "node-html-parser";

/** Repo root — this file lives at `<root>/test/helpers/`. */
export const projectRoot = fileURLToPath(new URL("../..", import.meta.url));

/** Where `nuxt generate` writes the pre-rendered site a visitor is served. */
export const outputDir = join(projectRoot, ".output", "public");

/**
 * Every route a visitor can currently reach. This is the single list the
 * route-covering conformance tests iterate: as pages are added or retired,
 * update it here and every such test follows. Keep it in sync with `pages/`.
 */
export const routes = [
  "/",
  "/about",
  "/contact",
  "/portfolio",
  "/services",
  "/small-builds",
] as const;
export type Route = (typeof routes)[number];

/** Map a route to the HTML file `nuxt generate` produced for it. */
export function htmlPathForRoute(route: string): string {
  const trimmed = route.replace(/^\/+|\/+$/g, "");
  return trimmed === ""
    ? join(outputDir, "index.html")
    : join(outputDir, trimmed, "index.html");
}

export interface RenderedPage {
  /** The route requested, e.g. `"/about"`. */
  readonly route: string;
  /** Absolute path to the generated HTML file. */
  readonly path: string;
  /** The raw pre-rendered HTML, exactly as served. */
  readonly html: string;
  /** Parsed DOM for querying elements/attributes (scripts left intact). */
  readonly root: HTMLElement;
  /**
   * Whitespace-normalised visible text — what a visitor actually reads, with
   * `<script>`/`<style>` stripped so the framework's inlined JSON payload
   * never pollutes copy/avoid-list assertions.
   */
  readonly text: string;
}

/** Immutable during a run — the build output does not change once generated. */
const cache = new Map<string, RenderedPage>();

/**
 * Load the pre-rendered HTML for a route. The one-liner every conformance
 * test builds on:
 *
 * ```ts
 * const home = await loadRoute("/");
 * expect(home.text).toContain("Senior full-stack engineer");
 * ```
 *
 * Rejects if the route produced no page, so a broken build fails loudly
 * rather than passing vacuously.
 */
export async function loadRoute(route: string): Promise<RenderedPage> {
  const cached = cache.get(route);
  if (cached) return cached;

  const path = htmlPathForRoute(route);

  let html: string;
  try {
    html = await readFile(path, "utf-8");
  } catch {
    throw new Error(
      `No pre-rendered page for route "${route}" (expected ${path}). ` +
        "Run the conformance suite (`npm test`), which builds the site first.",
    );
  }

  const root = parse(html);

  // Visible text comes from a throwaway parse so `root` keeps its scripts and
  // styles available for element/attribute assertions (e.g. meta, JSON-LD).
  const forText = parse(html);
  forText
    .querySelectorAll("script, style, noscript, template")
    .forEach((el) => el.remove());
  const text = forText.structuredText.replace(/\s+/g, " ").trim();

  const page: RenderedPage = { route, path, html, root, text };
  cache.set(route, page);
  return page;
}

/**
 * The `<main>` element of a rendered page — the page's own content, with the
 * shared chrome (nav, footer) excluded.
 *
 * Page-scoped conformance (tickets 2–5) asserts through this: a home-only rule
 * like "no 'agency' language here" must not trip over the footer's registered
 * legal name or a not-yet-rebuilt nav, both of which live outside `<main>` and
 * belong to tickets 6/8. Returns the live element for read-only
 * element/attribute queries; use `mainText` for copy/avoid-list assertions.
 */
export function mainOf(page: RenderedPage): HTMLElement {
  const main = page.root.querySelector("main");
  if (!main) {
    throw new Error(
      `No <main> element in the rendered page for route "${page.route}" ` +
        `(${page.path}). The default layout wraps every page's content in <main>.`,
    );
  }
  return main;
}

/**
 * Whitespace-normalised visible text of a page's `<main>` — the same contract
 * as `RenderedPage.text`, narrowed to the page's own content (chrome excluded).
 * Parses a throwaway copy so the cached `root` keeps its scripts intact for
 * other assertions.
 */
export function mainText(page: RenderedPage): string {
  const scoped = parse(mainOf(page).outerHTML);
  scoped
    .querySelectorAll("script, style, noscript, template")
    .forEach((el) => el.remove());
  return scoped.structuredText.replace(/\s+/g, " ").trim();
}
