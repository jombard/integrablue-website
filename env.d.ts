/// <reference types="vite/client" />

// Brings in Vite's ambient module declarations (`declare module "*.jpg"`, etc.)
// so static asset imports like `import mugUrl from "~/assets/images/mug.jpg"`
// type-check. Nuxt's generated types don't reference vite/client directly.
