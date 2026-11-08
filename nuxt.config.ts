// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],

  css: ["~/assets/css/main.css"],

  // Build configuration to ensure icons are properly included
  build: {
    transpile: ["@nuxt/ui"],
  },

  // GitHub Pages configuration
  nitro: {
    prerender: {
      routes: ["/", "/small-builds"],
    },
  },

  // App configuration
  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
    head: {
      title: "IntegraBlue | one-person software consultancy",
      meta: [
        {
          name: "description",
          content:
            "IntegraBlue is Jon Lombard's one-person consultancy. Independent senior developer: modernising production software and taking ongoing ownership. UK, remote-first.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: "IntegraBlue | one-person software consultancy" },
        {
          property: "og:description",
          content:
            "Jon Lombard's consultancy for modernising production software and taking ongoing ownership. Backend, APIs, frontend, databases, infrastructure, tests and CI/CD.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://integrablue.co.uk/" },
        {
          property: "og:image",
          content: "https://integrablue.co.uk/apple-touch-icon.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "IntegraBlue | one-person software consultancy" },
        {
          name: "twitter:description",
          content:
            "IntegraBlue is Jon Lombard's one-person consultancy. Modernising production software and taking ongoing ownership. UK, remote-first.",
        },
        {
          name: "twitter:image",
          content: "https://integrablue.co.uk/apple-touch-icon.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16.png",
        },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },

  // Runtime config for form endpoint
  runtimeConfig: {
    public: {
      formEndpoint:
        process.env.FORM_ENDPOINT || "https://formspree.io/f/mnnzvarw",
    },
  },

  // PostCSS configuration for Tailwind CSS v4
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
});
