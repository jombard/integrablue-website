import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { htmlPathForRoute, projectRoot } from "../helpers/rendered";

/**
 * Vitest `globalSetup`: produce the static site the conformance suite asserts
 * over. `nuxt generate` pre-renders every crawled route to `.output/public` —
 * the single seam every conformance test reads through (never component
 * internals or framework wiring).
 *
 * Runs once, before any test. Set `CONFORMANCE_SKIP_BUILD=1` to reuse an
 * existing build during fast local iteration (ignored when no build output is
 * present yet, so the first run always builds).
 */
export default function setup(): void {
  const buildExists = existsSync(htmlPathForRoute("/"));

  if (process.env.CONFORMANCE_SKIP_BUILD === "1" && buildExists) {
    console.log(
      "[conformance] CONFORMANCE_SKIP_BUILD=1 — reusing existing .output/public",
    );
    return;
  }

  console.log("[conformance] Building static site with `nuxt generate`…");
  execSync("npm run generate", { cwd: projectRoot, stdio: "inherit" });
}
