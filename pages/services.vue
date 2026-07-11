<template>
  <div class="bg-canvas text-fg">
    <section class="px-5 py-24 md:px-8 md:py-32">
      <div class="mx-auto max-w-site">
        <p class="font-mono text-sm uppercase tracking-[0.14em] text-sky">
          This page has moved
        </p>
        <h1
          class="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-fg sm:text-4xl"
        >
          Small builds is where this lives now.
        </h1>
        <p class="mt-5 max-w-2xl text-lg text-fg-muted">
          I no longer run a services menu. If you have a small, well-defined
          build, the
          <NuxtLink
            to="/small-builds"
            class="font-medium text-sky underline underline-offset-4"
            >Small builds page</NuxtLink
          >
          explains what fits and how it works.
        </p>
        <p class="mt-8">
          <NuxtLink
            to="/small-builds"
            class="font-medium text-sky underline underline-offset-4"
          >
            Go to Small builds →
          </NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * Retired agency route. `/services` sold a multi-person service menu; the
 * contractor brand replaces it with the Small Builds funnel (ADR-0001,
 * website-revamp.md). External links may still point here, so it serves a
 * lightweight redirect stub — never a 404:
 *
 *   - a `meta http-equiv="refresh"` sends every visitor to /small-builds, with
 *     no JavaScript required (the site is statically hosted on GitHub Pages);
 *   - a canonical link points search engines at the new content;
 *   - `noindex` stops the retired route being advertised in results;
 *   - a visible link is the no-JS fallback so the page is never a dead end.
 */
useHead({
  title: "This page has moved — Small builds | IntegraBlue",
  meta: [
    { "http-equiv": "refresh", content: "0; url=/small-builds" },
    { name: "robots", content: "noindex, follow" },
    {
      name: "description",
      content:
        "The services page has moved to Small builds — fixed-scope websites, integrations, and automations.",
    },
  ],
  link: [
    { rel: "canonical", href: "https://integrablue.co.uk/small-builds" },
  ],
});
</script>
