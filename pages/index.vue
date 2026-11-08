<template>
  <div class="bg-canvas text-fg">
    <!-- Hero — the person, the company, the first screen -->
    <section class="px-5 py-16 md:px-8 md:py-24 lg:py-32">
      <div class="mx-auto max-w-site">
        <div
          class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        >
          <div>
            <p
              class="font-mono text-sm uppercase tracking-[0.14em] text-sky"
            >
              One-person consultancy · UK · remote-first
            </p>

            <h1
              class="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-[3.5rem]"
            >
              I take on production software and keep it in good shape.
            </h1>

            <p class="mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">
              IntegraBlue is my one-person consultancy. I'm Jon Lombard, an
              independent senior developer. Backend, APIs, frontend, databases,
              infrastructure, tests and CI/CD, plus the conversations with the
              people who need the work done.
            </p>

            <p class="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">
              Most of the work is modernising a system that already exists,
              making it maintainable, protecting data while it changes, and
              reducing what it costs to run in the cloud. I stay with the
              product. You deal with me the whole way.
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

          <!-- Owner's photo — its job is verification, so it carries the name. -->
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

    <!-- Proof — short anonymised examples, not a promise of a case-study library -->
    <section
      id="proof"
      class="border-t border-hairline px-5 py-16 md:px-8 md:py-24 lg:py-32"
    >
      <div class="mx-auto max-w-site">
        <p class="font-mono text-sm uppercase tracking-[0.14em] text-sky">
          Some of the work
        </p>
        <h2
          class="mt-3 text-2xl font-bold tracking-tight text-fg sm:text-3xl"
        >
          A few examples from delivered engagements.
        </h2>
        <p class="mt-5 max-w-2xl text-lg text-fg-muted">
          Names, products and employers stay out of it. These are the shape of
          the work, written so they can sit on a public page.
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
              {{ note.label }}
            </p>
            <p class="mt-3 leading-relaxed">{{ note.summary }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Pointer to a conversation, with small builds as one defined option -->
    <section class="px-5 pb-16 md:px-8 md:pb-24 lg:pb-32">
      <div class="mx-auto max-w-site">
        <div class="rounded-2xl bg-surface p-8 shadow-xl md:p-12">
          <p
            class="font-mono text-sm uppercase tracking-[0.14em] text-ink-muted"
          >
            Work together
          </p>
          <h2
            class="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            Discuss your project.
          </h2>
          <p class="mt-4 max-w-2xl text-lg text-ink-muted">
            If you have a system that needs modernising, or a product that needs
            ongoing ownership, email me and I'll say whether it's a fit. A
            smaller, well-defined build is sometimes the right first slice.
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
 * Short anonymised examples for the Proof section. Labels describe the kind of
 * work, never a client, employer, product or acquirer.
 */
interface CaseNote {
  slug: string;
  label: string;
  summary: string;
}

const caseNotes: CaseNote[] = [
  {
    slug: "api-modernisation",
    label: "API modernisation",
    summary:
      "I moved long-lived .NET Framework APIs toward modern .NET. Existing behaviour had to stay intact, so much of the work was compatibility checks and repairing what the upgrade broke. I've worked on spaghetti codebases and turned them into lasagna: clear layers with distinct responsibilities.",
  },
  {
    slug: "legacy-rewrite",
    label: "Legacy rewrite",
    summary:
      "I rewrote legacy software and simplified the Azure estate that ran it, including infrastructure described in Terraform. I looked at what was actually running, and the running spend came down.",
  },
  {
    slug: "interfaces",
    label: "Customer and admin interfaces",
    summary:
      "I rebuilt customer and admin interfaces, with automated tests and a release pipeline so changes could be checked before they went out.",
  },
];

useHead({
  title: "IntegraBlue | one-person software consultancy",
  meta: [
    {
      name: "description",
      content:
        "IntegraBlue is Jon Lombard's one-person consultancy. Independent senior developer: modernising production software and taking ongoing ownership. UK, remote-first.",
    },
    {
      property: "og:title",
      content: "IntegraBlue | one-person software consultancy",
    },
    {
      property: "og:description",
      content:
        "Jon Lombard's consultancy for modernising production software and taking ongoing ownership. Backend, APIs, frontend, databases, infrastructure, tests and CI/CD.",
    },
    {
      name: "twitter:title",
      content: "IntegraBlue | one-person software consultancy",
    },
    {
      name: "twitter:description",
      content:
        "IntegraBlue is Jon Lombard's one-person consultancy. Modernising production software and taking ongoing ownership. UK, remote-first.",
    },
  ],
});
</script>
