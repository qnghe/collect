/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "rgb(var(--color-primary) / <alpha-value>)"
      },
      borderColor: {
        common: "rgb(var(--border-color-default) / <alpha-value>)"
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}

