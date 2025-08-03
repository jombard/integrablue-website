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
      routes: ["/"],
    },
  },

  // App configuration
  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
    head: {
      title: "IntegraBlue Web Agency",
      meta: [
        {
          name: "description",
          content:
            "Modern web agency for small businesses and startups. Specializing in Nuxt 3, Vue.js, and minimalist design.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: "IntegraBlue Web Agency" },
        {
          property: "og:description",
          content:
            "Modern web agency for small businesses and startups. Specializing in Nuxt 3, Vue.js, and minimalist design.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://integrablue.co.uk/" },
        {
          property: "og:image",
          content: "https://integrablue.co.uk/favicon.ico",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "IntegraBlue Web Agency" },
        {
          name: "twitter:description",
          content:
            "Modern web agency for small businesses and startups. Specializing in Nuxt 3, Vue.js, and minimalist design.",
        },
        {
          name: "twitter:image",
          content: "https://integrablue.co.uk/favicon.ico",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
