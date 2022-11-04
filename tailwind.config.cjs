/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm280: { max: "280px" },
      xs: { max: "350px" },
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#08d665",
        secondary: "",
      },
      backgroundColor: {
        "main-bg": "#212121",
        "section-bg": "#262626",
      },
    },
    // fontFamily: {
    //   poppins: ["Poppins", "sans-serif"],
    // },
  },
  plugins: [],
};
