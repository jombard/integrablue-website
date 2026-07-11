# Conformance suite

The site's single test seam. It builds the static site and asserts over the
**pre-rendered HTML a visitor actually sees** — never component internals,
framework wiring, or styling classes. Any internal refactor that leaves the
rendered content correct must keep this suite green.

Governing docs: [`CONTEXT.md`](../../CONTEXT.md) (binding for all copy) and
[`docs/plans/website-revamp.md`](../../docs/plans/website-revamp.md).

## Running it

```bash
npm test          # builds the site (nuxt generate), then runs the suite
npm run test:watch
```

`npm test` is self-contained: a Vitest `globalSetup`
([`test/setup/build.ts`](setup/build.ts)) runs `nuxt generate` first, so the
assertions always read a fresh build.

While iterating on tests, skip the (slow) rebuild and reuse the last build:

```bash
CONFORMANCE_SKIP_BUILD=1 npm test     # bash / CI
$env:CONFORMANCE_SKIP_BUILD=1; npm test   # PowerShell
```

## Writing a test

Load a route's rendered HTML with the one-liner helper and assert:

```ts
import { loadRoute } from "../helpers/rendered";

const home = await loadRoute("/");
expect(home.text).toContain("Senior full-stack engineer"); // visible copy
expect(home.root.querySelector("title")?.text).toBeTruthy(); // any element/attr
```

`loadRoute` returns:

- `html` — raw pre-rendered HTML, exactly as served.
- `root` — parsed DOM ([`node-html-parser`](https://www.npmjs.com/package/node-html-parser));
  `querySelector`/`querySelectorAll` for elements, attributes, meta, JSON-LD.
- `text` — whitespace-normalised **visible** text (scripts/styles stripped),
  for copy presence and avoid-list-absence assertions.

`routes` in [`helpers/rendered.ts`](helpers/rendered.ts) lists every current
route; iterate it for site-wide checks. Update it when a page is added or
retired.

## The pattern for later tickets

This suite is the precedent every later ticket asserts through. Add
page-scoped tests under [`conformance/`](conformance/) that check required
content is **present** (the Spearhead, the AI-tooling stance, the two contact
commitments, the footer legal name, …) and that avoid-list language is
**absent** ("we/our team", "agency" outside the footer, invented testimonials,
"AI-powered", the retired availability promises). Ticket 8 promotes these from
page-scoped to site-wide across every route in `routes`.
