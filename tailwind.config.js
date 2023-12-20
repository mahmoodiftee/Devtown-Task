/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'liteColor': '#161616',
        'darkColor': '#111111',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["cupcake", "business"],
  },
}

