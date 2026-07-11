import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Build the static site once before any test runs; the whole suite then
    // asserts over that pre-rendered output — the single conformance seam.
    globalSetup: ["./test/setup/build.ts"],
    include: ["test/**/*.test.ts"],
    // Reading generated HTML is fast. The slow part (the build) runs in
    // globalSetup, which testTimeout does not bound.
    testTimeout: 15_000,
  },
});
