import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { loadRoute, outputDir } from "../helpers/rendered";

const AZURE = "#93c5fd";
const NAVY = "#0d2444";

describe("conformance — IB favicon", () => {
  it("ships SVG, ICO and PNG fallbacks in the static output", () => {
    for (const name of [
      "favicon.svg",
      "favicon.ico",
      "favicon-16.png",
      "favicon-32.png",
      "apple-touch-icon.png",
    ]) {
      expect(
        existsSync(join(outputDir, name)),
        `expected ${name} in the generated site`,
      ).toBe(true);
    }

    const svg = readFileSync(join(outputDir, "favicon.svg"), "utf8");
    expect(svg).toContain(AZURE);
    expect(svg).toContain(NAVY);
    expect(svg.toLowerCase()).not.toContain("nuxt");
  });

  it("prefers the IB SVG icon and keeps ICO/PNG fallbacks on every route", async () => {
    const home = await loadRoute("/");
    const icons = home.root
      .querySelectorAll("link[rel~='icon'], link[rel='shortcut icon']")
      .map((el) => ({
        rel: (el.getAttribute("rel") ?? "").toLowerCase(),
        type: (el.getAttribute("type") ?? "").toLowerCase(),
        href: el.getAttribute("href") ?? "",
      }));

    expect(icons.length).toBeGreaterThanOrEqual(2);
    expect(
      icons.some(
        (i) =>
          i.type.includes("svg") && i.href.includes("favicon.svg"),
      ),
      "modern browsers should be offered favicon.svg",
    ).toBe(true);
    expect(
      icons.some((i) => i.href.includes("favicon.ico")),
      "favicon.ico should remain as a fallback",
    ).toBe(true);
    expect(
      icons.every((i) => !/nuxt|icon\.svg$/i.test(i.href) || i.href.includes("favicon.svg")),
    ).toBe(true);

    const hrefs = icons.map((i) => i.href).join(" ");
    expect(hrefs).not.toMatch(/https?:\/\/nuxt\.com/i);
  });
});
