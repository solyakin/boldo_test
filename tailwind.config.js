/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#0A2640",
        shadeblue: "#0A2640CC",
        lightgreen: "#65E4A3"
      }
    },
  },
  plugins: [],
}

