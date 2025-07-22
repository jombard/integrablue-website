// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  app: {
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
        { property: "og:url", content: "https://yourdomain.com/" },
        { property: "og:image", content: "/favicon.ico" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "IntegraBlue Web Agency" },
        {
          name: "twitter:description",
          content:
            "Modern web agency for small businesses and startups. Specializing in Nuxt 3, Vue.js, and minimalist design.",
        },
        { name: "twitter:image", content: "/favicon.ico" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
