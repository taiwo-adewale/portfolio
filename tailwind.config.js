/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: { max: "339px" },
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1120px",
      xxl: "1800px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#171717",
        light: "#f5f5f5",
        textGray: "#a3a3a3",
        borderColorDark: "#333333",
        borderColorLight: "#cccccc",
      },
      fontFamily: {
        primary: ["var(--font-ibm)"],
      },
    },
  },
  plugins: [],
};
