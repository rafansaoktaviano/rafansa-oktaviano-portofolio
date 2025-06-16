/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        baseWhite: "#ffffff",
        lightGray: "#f5f5f5",
        darkText: "#1a1a1a",
        subtleBorder: "#acacac",
        accentBlue: "#0077ff",
      },
      fontFamily: {
        saans: ["Saans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
