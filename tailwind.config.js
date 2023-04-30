/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ffe7e6",
          100: "#ffc7b8",
          200: "#ffa28a",
          300: "#ff795b",
          400: "#ff5436",
          500: "#ff200c",
          600: "#ff1507",
          DEFAULT: "#ff0000",
          800: "#f10000",
          900: "#da0000",
        },
        secondary: {
          50: "#f8f6fe",
          100: "#efedf4",
          200: "#e3e1e8",
          300: "#d1cfd6",
          400: "#acaab1",
          500: "#8b8990",
          600: "#646268",
          700: "#514f55",
          800: "#333137",
          DEFAULT: "#131117",
        },
      },
      fontFamily: {
        primary: ["Prompt", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
