<template>
  <div class="bg-canvas text-fg">
    <!-- Hero — a single, first-person invitation -->
    <section class="px-5 py-16 md:px-8 md:py-24 lg:py-28">
      <div class="mx-auto max-w-site">
        <p class="font-mono text-sm uppercase tracking-[0.14em] text-sky">
          Contact
        </p>

        <h1
          class="mt-5 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-5xl"
        >
          Tell me about the project.
        </h1>

        <p class="mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">
          Modernisation, ongoing product ownership, or a smaller well-defined
          build: describe the problem in your own words. It goes straight to me,
          the same person who would do the work.
        </p>
      </div>
    </section>

    <!-- Form + what-happens-next, side by side on large screens -->
    <section class="px-5 pb-16 md:px-8 md:pb-24 lg:pb-32">
      <div class="mx-auto grid max-w-site gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <!-- The form, on a light reading surface -->
        <div class="rounded-2xl bg-surface p-6 text-ink shadow-xl sm:p-8 md:p-10">
          <!-- Success replaces the form once the enquiry is sent -->
          <div v-if="status === 'success'" data-form-success>
            <p class="font-mono text-sm uppercase tracking-[0.12em] text-ink-muted">
              Message sent
            </p>
            <h2 class="mt-3 text-2xl font-bold tracking-tight text-ink">
              Thanks. That's with me.
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-ink-muted">
              I read every enquiry myself and I'll reply personally, usually
              within two working days. If the next step is a scoped piece of
              work, the first step is a short, free scoping call.
            </p>
            <p class="mt-6">
              <NuxtLink
                to="/about"
                class="font-medium text-link-ink underline underline-offset-4"
              >
                More about how IntegraBlue works →
              </NuxtLink>
            </p>
          </div>

          <!-- The form itself -->
          <div v-else>
            <p class="font-mono text-sm uppercase tracking-[0.12em] text-ink-muted">
              Your enquiry
            </p>
            <h2 class="mt-3 text-2xl font-bold tracking-tight text-ink">
              Describe the problem.
            </h2>

            <!-- Native action/method make this work even without JavaScript;
                 the @submit handler enhances it with an inline confirmation. -->
            <form
              :action="formEndpoint"
              method="post"
              class="mt-8 space-y-6"
              @submit.prevent="onSubmit"
            >
              <div>
                <label for="name" class="block font-mono text-sm text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autocomplete="name"
                  :class="fieldClass"
                />
              </div>

              <div>
                <label for="email" class="block font-mono text-sm text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autocomplete="email"
                  :class="fieldClass"
                />
              </div>

              <div>
                <label
                  for="company"
                  class="block font-mono text-sm text-ink-muted"
                >
                  Company <span class="text-ink-muted/70">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autocomplete="organization"
                  :class="fieldClass"
                />
              </div>

              <div>
                <label
                  for="message"
                  class="block font-mono text-sm text-ink-muted"
                >
                  Tell me about the project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="The problem, roughly what you need, and anything I should know."
                  :class="[fieldClass, 'resize-y']"
                ></textarea>
              </div>

              <div>
                <label
                  for="timeline"
                  class="block font-mono text-sm text-ink-muted"
                >
                  Rough timeline <span class="text-ink-muted/70">(optional)</span>
                </label>
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  placeholder="e.g. sometime this quarter, or no fixed deadline"
                  :class="fieldClass"
                />
              </div>

              <div>
                <label
                  for="referral"
                  class="block font-mono text-sm text-ink-muted"
                >
                  How did you hear about me?
                  <span class="text-ink-muted/70">(optional)</span>
                </label>
                <input
                  id="referral"
                  name="referral"
                  type="text"
                  :class="fieldClass"
                />
              </div>

              <!-- The one rationed azure CTA on this screen -->
              <button
                type="submit"
                :disabled="status === 'submitting'"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-ink transition-colors duration-150 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-45"
              >
                {{ status === "submitting" ? "Sending…" : "Send it to me" }}
              </button>

              <!-- Error stays beside the form so a retry is one click away -->
              <p
                v-if="status === 'error'"
                data-form-error
                role="alert"
                class="rounded-lg border border-danger bg-surface-sunk px-4 py-3 text-sm text-ink"
              >
                Something went wrong sending that. Please try again, or email me
                directly at
                <a
                  href="mailto:hello@integrablue.co.uk"
                  class="font-medium text-link-ink underline underline-offset-4"
                  >hello@integrablue.co.uk</a
                >.
              </p>
            </form>
          </div>
        </div>

        <!-- What happens next: the two honest commitments -->
        <aside class="lg:pt-2">
          <p class="font-mono text-sm uppercase tracking-[0.14em] text-sky">
            What happens next
          </p>
          <h2 class="mt-3 text-2xl font-bold tracking-tight text-fg">
            Two things I'll always do.
          </h2>

          <ol class="mt-8 space-y-8">
            <li>
              <p class="font-mono text-sm text-sky">01</p>
              <p class="mt-2 text-lg leading-relaxed text-fg-muted">
                I reply personally, usually within two working days. No
                auto-responder, no account manager. Just me.
              </p>
            </li>
            <li>
              <p class="font-mono text-sm text-sky">02</p>
              <p class="mt-2 text-lg leading-relaxed text-fg-muted">
                If the next step is a scoped piece of work, a short, free
                scoping call is step one of every fixed quote, so you and I
                agree exactly what I'll deliver before any work starts.
              </p>
            </li>
          </ol>

          <p class="mt-10 text-base leading-relaxed text-fg-muted">
            Prefer email? Reach me at
            <a
              href="mailto:hello@integrablue.co.uk"
              class="font-medium text-sky underline underline-offset-4"
              >hello@integrablue.co.uk</a
            >.
          </p>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Contact | discuss your project with IntegraBlue",
  meta: [
    {
      name: "description",
      content:
        "Describe the project in your own words and it comes straight to me. I reply personally, usually within two working days. Every fixed quote starts with a short free scoping call.",
    },
    {
      property: "og:title",
      content: "Contact | discuss your project with IntegraBlue",
    },
    {
      property: "og:description",
      content:
        "A first-person contact form for modernisation, ongoing product ownership, or a smaller well-defined build. Personal reply usually within two working days.",
    },
    {
      name: "twitter:title",
      content: "Contact | discuss your project with IntegraBlue",
    },
    {
      name: "twitter:description",
      content:
        "Describe the project in your own words. Personal reply usually within two working days. Every fixed quote starts with a short free scoping call.",
    },
  ],
});

/**
 * The external form service (Formspree), resolved from runtime config and
 * inlined into the form's `action` at generate time. The site stays static:
 * with JavaScript the submit is enhanced into an inline confirmation; without
 * it, the browser posts natively to the same endpoint.
 */
const formEndpoint = useRuntimeConfig().public.formEndpoint as string;

/** Shared field styling: light-blue fill on the light-blue card. */
const fieldClass =
  "mt-2 w-full rounded-lg border border-hairline-lt bg-surface-sunk px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface";

// The inputs are uncontrolled: `onSubmit` reads current values straight off the
// form via FormData, and the native `name` attributes carry both the JS and the
// no-JS post, so no reactive mirror of the field values is needed.
type Status = "idle" | "submitting" | "success" | "error";
const status = ref<Status>("idle");

const onSubmit = async (event: Event): Promise<void> => {
  status.value = "submitting";
  try {
    const body = new FormData(event.target as HTMLFormElement);
    const response = await fetch(formEndpoint, {
      method: "POST",
      body,
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error(`Form endpoint returned ${response.status}`);
    }
    status.value = "success";
  } catch (error) {
    console.error("Contact form submission failed:", error);
    status.value = "error";
  }
};
</script>
