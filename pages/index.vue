<template>
  <div class="bg-canvas text-fg">
    <!-- Hero — the Spearhead, the person, the first screen -->
    <section class="px-5 py-16 md:px-8 md:py-24 lg:py-32">
      <div class="mx-auto max-w-site">
        <div
          class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        >
          <div>
            <p
              class="font-mono text-sm uppercase tracking-[0.14em] text-sky"
            >
              C#/.NET · TypeScript · Azure
            </p>

            <h1
              class="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-[3.5rem]"
            >
              I'm the senior engineer teams trust with the whole stack.
            </h1>

            <!-- The Spearhead, verbatim (CONTEXT.md) -->
            <p class="mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">
              Senior full-stack engineer — C#/.NET, JavaScript/TypeScript, Azure
              — owning delivery from database to cloud to CI/CD.
            </p>

            <p class="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">
              I take ownership from the schema to the pipeline, tell you straight
              what a job actually needs, and pick up whatever technology the
              problem calls for. You deal with a named person the whole way — the
              senior you meet is the one who builds.
            </p>

            <div class="mt-9">
              <NuxtLink
                to="/small-builds"
                class="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-ink transition-colors duration-150 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                See how small builds work
              </NuxtLink>
            </div>
          </div>

          <!-- Owner's photo — its job is verification, so it carries the name.
               `mug.jpg` is the interim shot; the cap-off replacement is on the
               launch-gate checklist (DESIGN_SYSTEM.md). -->
          <figure class="lg:justify-self-end">
            <img
              :src="mugUrl"
              alt="Jon Lombard"
              width="640"
              height="640"
              class="w-full max-w-sm rounded-2xl border border-hairline object-cover shadow-2xl"
            />
            <figcaption class="mt-3 font-mono text-sm text-fg-muted">
              <span class="text-fg">Jon Lombard</span> · IntegraBlue
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Proof — structural container, empty until ticket 7 supplies real,
         NDA-safe case notes. Nothing is invented here. -->
    <section
      id="proof"
      class="border-t border-hairline px-5 py-16 md:px-8 md:py-24 lg:py-32"
    >
      <div class="mx-auto max-w-site">
        <p class="font-mono text-sm uppercase tracking-[0.14em] text-sky">
          Proof
        </p>
        <h2
          class="mt-3 text-2xl font-bold tracking-tight text-fg sm:text-3xl"
        >
          Evidence, not adjectives.
        </h2>
        <p class="mt-5 max-w-2xl text-lg text-fg-muted">
          I'd rather show the work than describe it. Anonymised, NDA-safe notes
          from real, delivered engagements live here — each one something you can
          check.
        </p>

        <ul class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="note in caseNotes"
            :key="note.slug"
            data-proof-item
            class="rounded-2xl bg-surface p-6 text-ink shadow-xl"
          >
            <p
              class="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted"
            >
              {{ note.client }}
            </p>
            <p class="mt-3">{{ note.summary }}</p>
            <p class="mt-4">
              <NuxtLink
                :to="note.href"
                class="font-medium text-link-ink underline underline-offset-4"
              >
                Read the note →
              </NuxtLink>
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Pointer to the only inbound funnel: Small Builds -->
    <section class="px-5 pb-16 md:px-8 md:pb-24 lg:pb-32">
      <div class="mx-auto max-w-site">
        <div class="rounded-2xl bg-surface p-8 shadow-xl md:p-12">
          <p
            class="font-mono text-sm uppercase tracking-[0.14em] text-ink-muted"
          >
            Small builds
          </p>
          <h2
            class="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            Got a small, well-defined build?
          </h2>
          <p class="mt-4 max-w-2xl text-lg text-ink-muted">
            A website, an integration, an automation — roughly ten days of work,
            delivered over a few weeks alongside my embedded engagement. I scope
            it on a short call, quote a fixed price before anything starts, then
            build it.
          </p>
          <p class="mt-6">
            <NuxtLink
              to="/small-builds"
              class="font-medium text-link-ink underline underline-offset-4"
            >
              See how a small build works →
            </NuxtLink>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import mugUrl from "~/assets/images/mug.jpg";

/**
 * Proof case notes. Empty until ticket 7 supplies real, anonymised, NDA-safe
 * material (the launch gate). The shape is fixed now so notes — and later
 * endorsements — slot in as content without restructuring the section.
 */
interface CaseNote {
  /** Stable key / URL slug for the full note. */
  slug: string;
  /** Anonymised label, e.g. "Mid-size fintech". Never a real client name. */
  client: string;
  /** One-line summary shown on Home; the full note lives at `href`. */
  summary: string;
  /** Route to the full case note. */
  href: string;
}

const caseNotes: CaseNote[] = [];

useHead({
  title:
    "Jon Lombard — Senior full-stack engineer (C#/.NET, Azure) | IntegraBlue",
  meta: [
    {
      name: "description",
      content:
        "Jon Lombard, senior full-stack engineer — C#/.NET, JavaScript/TypeScript, Azure — owning delivery from database to cloud to CI/CD. UK, remote-first.",
    },
    {
      property: "og:title",
      content: "Jon Lombard — Senior full-stack engineer | IntegraBlue",
    },
    {
      property: "og:description",
      content:
        "Senior full-stack engineer — C#/.NET, JavaScript/TypeScript, Azure — owning delivery from database to cloud to CI/CD.",
    },
    {
      name: "twitter:title",
      content: "Jon Lombard — Senior full-stack engineer | IntegraBlue",
    },
    {
      name: "twitter:description",
      content:
        "Senior full-stack engineer — C#/.NET, JavaScript/TypeScript, Azure — owning delivery from database to cloud to CI/CD.",
    },
  ],
});
</script>
