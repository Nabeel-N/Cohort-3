/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#e0e7fe",
          500: "#3e38a7",
          600: "#5046e7",
        },
        gray:{
          100:"#eeeeef",
          200:"#e6e9ed",
          600:"#6174c0"
        }
      },
    },
  },
  plugins: [],
};