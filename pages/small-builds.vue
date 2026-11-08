<template>
  <div class="bg-canvas text-fg">
    <!-- Hero — what a small build is, and the one CTA -->
    <section class="px-5 py-16 md:px-8 md:py-24 lg:py-32">
      <div class="mx-auto max-w-site">
        <p class="font-mono text-sm uppercase tracking-[0.14em] text-sky">
          Small builds
        </p>

        <h1
          class="mt-5 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-5xl"
        >
          A small, well-defined piece of work, quoted up front.
        </h1>

        <p class="mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">
          A website, an integration, an automation: if it's a single,
          well-defined piece of work, I can build it in side capacity, at a
          fixed price agreed up front.
        </p>

        <p class="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">
          IntegraBlue is my one-person consultancy. Small builds are one way to
          start. You get the same person for scoping, building, and handover.
        </p>

        <!-- Scope at a glance (mono technical accent, not pricing) -->
        <p
          class="mt-8 font-mono text-sm uppercase tracking-[0.12em] text-sky"
        >
          ~10 effort-days · 4-8 weeks · fixed quote
        </p>

        <div class="mt-9">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-ink transition-colors duration-150 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            Discuss your project
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- What fits + how it works — long-form prose on a light reading surface -->
    <section class="px-5 pb-4 md:px-8">
      <div class="mx-auto max-w-site">
        <div class="rounded-2xl bg-surface p-8 text-ink shadow-xl md:p-12">
          <div class="max-w-2xl">
            <p
              class="font-mono text-sm uppercase tracking-[0.12em] text-ink-muted"
            >
              What fits
            </p>
            <h2
              class="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              One thing, described in a sentence.
            </h2>
            <p class="mt-5 text-lg leading-relaxed text-ink-muted">
              A small build is a single, well-defined piece of work: something
              you can describe in a sentence and I can finish in about ten
              effort-days. That lands over roughly four to eight calendar weeks,
              because I fit it around other delivery rather than dropping
              everything for it.
            </p>
            <p class="mt-4 text-lg leading-relaxed text-ink-muted">
              The scope is the honest part. If the work is genuinely small and
              clear, it fits. If it isn't, I'll say so on the call rather than
              stretch a fixed quote over a moving target.
            </p>
          </div>

          <!-- Process: scoping call → fixed quote → build -->
          <div class="mt-10 border-t border-hairline-lt pt-8">
            <p
              class="font-mono text-sm uppercase tracking-[0.12em] text-ink-muted"
            >
              How it works
            </p>
            <ol class="mt-6 grid gap-8 md:grid-cols-3">
              <li>
                <p class="font-mono text-sm text-ink-muted">01</p>
                <h3 class="mt-2 text-lg font-bold text-ink">
                  A short scoping call
                </h3>
                <p class="mt-2 leading-relaxed text-ink-muted">
                  Free, no obligation. You describe the problem; I tell you
                  honestly whether it fits a small build and what it would take.
                </p>
              </li>
              <li>
                <p class="font-mono text-sm text-ink-muted">02</p>
                <h3 class="mt-2 text-lg font-bold text-ink">
                  A fixed quote, up front
                </h3>
                <p class="mt-2 leading-relaxed text-ink-muted">
                  I write down exactly what I'll deliver for a fixed price,
                  agreed before any work starts. No open-ended
                  time-and-materials, no scope creep by stealth.
                </p>
              </li>
              <li>
                <p class="font-mono text-sm text-ink-muted">03</p>
                <h3 class="mt-2 text-lg font-bold text-ink">The build</h3>
                <p class="mt-2 leading-relaxed text-ink-muted">
                  I build it over four to eight weeks alongside other work and
                  hand it over finished, the same person who scoped it.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Concrete examples of what qualifies -->
    <section class="px-5 py-16 md:px-8 md:py-24">
      <div class="mx-auto max-w-site">
        <p class="font-mono text-sm uppercase tracking-[0.14em] text-sky">
          For example
        </p>
        <h2 class="mt-3 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
          What a small build looks like.
        </h2>

        <ul class="mt-10 grid gap-6 md:grid-cols-3">
          <li
            data-example
            class="rounded-2xl bg-surface p-6 text-ink shadow-xl"
          >
            <h3 class="text-lg font-bold text-ink">A website</h3>
            <p class="mt-3 leading-relaxed text-ink-muted">
              A marketing site or landing page, designed, built, and deployed on
              a stack you can actually maintain, not a template you'll fight
              later.
            </p>
          </li>
          <li
            data-example
            class="rounded-2xl bg-surface p-6 text-ink shadow-xl"
          >
            <h3 class="text-lg font-bold text-ink">An integration</h3>
            <p class="mt-3 leading-relaxed text-ink-muted">
              Two systems that don't talk yet, wired together: a booking form
              into your CRM, a payment provider into your ledger, one API onto
              another.
            </p>
          </li>
          <li
            data-example
            class="rounded-2xl bg-surface p-6 text-ink shadow-xl"
          >
            <h3 class="text-lg font-bold text-ink">An automation</h3>
            <p class="mt-3 leading-relaxed text-ink-muted">
              A manual, repetitive job made to run itself: a scheduled data sync,
              a report that builds and sends on its own, a webhook that files the
              work for you.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Over the cap: honest options — long-form reading on a light surface -->
    <section class="px-5 pb-16 md:px-8 md:pb-24 lg:pb-32">
      <div class="mx-auto max-w-site">
        <div class="rounded-2xl bg-surface p-8 text-ink shadow-xl md:p-12">
          <div class="max-w-2xl">
            <p
              class="font-mono text-sm uppercase tracking-[0.12em] text-ink-muted"
            >
              Bigger than that?
            </p>
            <h2
              class="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              Larger work is still worth a conversation.
            </h2>
            <p class="mt-5 text-lg leading-relaxed text-ink-muted">
              Some work is bigger than about ten effort-days: modernising an
              existing system, taking ongoing product ownership, an MVP. That's
              often the main IntegraBlue work, just not a small build.
            </p>
            <p class="mt-4 text-lg leading-relaxed text-ink-muted">
              Email me and I'll say whether I can take it. If a small build
              still helps, I may offer a phase one slice, the most useful piece
              scoped to fit and delivered first. If it isn't a fit, a referral
              is more honest than stretching a fixed quote.
            </p>
            <p class="mt-8">
              <NuxtLink
                to="/contact"
                class="font-medium text-link-ink underline underline-offset-4"
              >
                Discuss your project →
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title:
    "Small builds | fixed-scope websites, integrations and automations",
  meta: [
    {
      name: "description",
      content:
        "A small, well-defined build: a website, an integration, an automation. Scoped on a short free call and delivered at a fixed price over four to eight weeks, by the person who builds it.",
    },
    {
      property: "og:title",
      content: "Small builds | websites, integrations and automations",
    },
    {
      property: "og:description",
      content:
        "A single, well-defined build: scoping call, fixed quote agreed before work starts, then the build. Roughly ten effort-days over four to eight weeks.",
    },
    {
      name: "twitter:title",
      content: "Small builds | websites, integrations and automations",
    },
    {
      name: "twitter:description",
      content:
        "A single, well-defined build: scoping call, fixed quote, then the build. Roughly ten effort-days over four to eight weeks.",
    },
  ],
});
</script>
