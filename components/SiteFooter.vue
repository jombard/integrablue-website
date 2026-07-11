<template>
  <!--
    Shared site footer (website-revamp.md, ticket 6). Carries the registered
    legal name "IntegraBlue Web Agency Limited" — the only region of the site
    where "Web Agency" may appear. The retired agency copy (small-business
    marketing blurb, the services link column, the placeholder social buttons)
    is gone; everywhere else the brand is plain "IntegraBlue".
  -->
  <footer class="border-t border-hairline bg-canvas">
    <div class="mx-auto max-w-site px-5 py-16 md:px-8">
      <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <!-- Brand + one honest, first-person line. Plain "IntegraBlue" — the
             registered name appears only in the legal line below. -->
        <div class="max-w-md">
          <p class="text-xl font-extrabold tracking-tight">
            <span class="text-fg">Integra</span><span class="text-sky">Blue</span>
          </p>
          <p class="mt-3 text-fg-muted">
            Senior full-stack engineer, owning delivery from database to cloud to
            CI/CD. I work remotely with teams anywhere in the UK; on-site by
            arrangement.
          </p>
        </div>

        <!-- Contact — the real, honoured channel. -->
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-sky">
            Get in touch
          </p>
          <ul class="mt-4 space-y-2 text-fg-muted">
            <li>
              <a
                href="mailto:hello@integrablue.co.uk"
                class="text-sky underline underline-offset-4"
                >hello@integrablue.co.uk</a
              >
            </li>
            <li>United Kingdom · Remote-first</li>
          </ul>
        </div>
      </div>

      <!-- Legal line: the sole place the registered name "IntegraBlue Web
           Agency Limited" appears (CONTEXT.md). Everywhere else the brand is
           plain "IntegraBlue".
           Owner to add: company registration number and registered office
           address (UK Companies Act 2006, s.82) once confirmed — not invented
           here. -->
      <div
        class="mt-12 border-t border-hairline pt-8 font-mono text-xs text-fg-muted"
      >
        <p data-legal-name>
          IntegraBlue is the trading name of IntegraBlue Web Agency Limited. ©
          2026 IntegraBlue Web Agency Limited. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
