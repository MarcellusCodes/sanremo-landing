/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Lato", "sans-serif"],
        secondary: ["Martel Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
