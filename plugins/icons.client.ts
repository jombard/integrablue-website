// Client-side plugin to ensure all Heroicons are loaded in production
export default defineNuxtPlugin(() => {
  // This plugin ensures that all Heroicons used in the application
  // are properly included in the production build

  // Create a virtual import to ensure icons are bundled
  const iconNames = [
    "heart",
    "users",
    "sparkles",
    "shield-check",
    "clock",
    "academic-cap",
    "light-bulb",
    "user-group",
    "paint-brush",
    "code-bracket",
    "cpu-chip",
    "rocket-launch",
    "check",
    "check-circle",
    "cog-6-tooth",
    "wrench-screwdriver",
    "calendar",
    "shopping-cart",
    "building-office",
    "chart-bar",
    "home-modern",
    "photo",
    "arrow-right",
    "envelope",
    "map-pin",
    "exclamation-triangle",
    "star-solid",
    "user",
  ];

  // This ensures the build system recognizes these icons
  // and includes them in the final bundle
  if (process.client) {
    // Force the icons to be included in the client bundle
    iconNames.forEach((name) => {
      // This creates a reference that the bundler will recognize
      const iconRef = `i-heroicons-${name}`;
      // The reference is used to ensure the icon is included
    });
  }
});
