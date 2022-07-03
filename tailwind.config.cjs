/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#F4E0C7",
        tertiary: "#E22333",
      },
      fontFamily: {
        primary: ["Bellota", "cursive"],
        secondary: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
