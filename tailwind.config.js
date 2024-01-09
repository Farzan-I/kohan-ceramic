/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffd7a7",
        secondary: "#e2b680",
        tertiary: "#877d6b",
        quaternary: "#845f31",
        quinary: "#0e0e0ebc",
        "black-100": "#101437",
        "black-200": "#090325",
        "white-100": "#f0ead6",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/sglbg.png')",
      },
    },
  },
  plugins: [],
};