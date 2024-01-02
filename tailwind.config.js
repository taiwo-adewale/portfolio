/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        background: "hsl(230 10% 11%)",
        foreground: "hsl(0 0% 85%)",
        separator: "hsl(230 8% 14%)",
        modal: "hsl(240 10% 6%)",
        border: {
          DEFAULT: "hsl(230 6% 20%)",
          secondary: "hsl(228 5% 19%)",
        },
        primary: {
          DEFAULT: "hsl(212 100% 42%)",
          foreground: "hsl(0 0% 84%)",
        },
        card: {
          DEFAULT: "hsl(230 12% 10%)",
          foreground: "hsl(0 0% 85%)",
          secondary: "hsl(230 15% 8%)",
          border: "hsl(233 10% 17%)",
        },
        loader: "linear-gradient(#000 0 0)",
      },
      boxShadow: {
        award: "0 4px 10px rgba(0, 0, 0, .2)",
        service: "-1px 2px 5px 3px rgba(0, 0, 0, .2)",
        form: "0 2px 5px rgba(0, 0, 0, .2)",
      },
      borderRadius: {
        small: "0.625rem",
        large: "1.25rem",
      },
      backgroundImage: {
        banner: "linear-gradient(#191a1f, #222328)",
        "home-card-label": "linear-gradient(#16171d, #14151c)",
        "home-card-service": "linear-gradient(#191a1f, #26272b)",
        "service-image": "linear-gradient(#191a1f, #27282c)",
      },
      fontFamily: {
        primary: ["Oswald", "sans-serif"],
      },
      keyframes: {
        loader1: {
          "0%, 100%": {
            backgroundSize: "20% 100%",
          },
          "33%, 66%": {
            backgroundSize: "20% 20%",
          },
        },
        loader2: {
          "0%, 33%": {
            backgroundPosition: "0 0, 50% 50%, 100% 100%",
          },
          "66%, 100%": {
            backgroundPosition: "100% 0, 50% 50%, 0 100%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        modalContentIn: {
          "0%": {
            opacity: "0",
            scale: "0",
          },
          "100%": {
            opacity: "1",
            scale: "1",
          },
        },
        modalContentOut: {
          "0%": {
            opacity: "1",
            scale: "1",
          },
          "100%": {
            opacity: "0",
            scale: "0",
          },
        },
      },
      animation: {
        rotate: "spin 3s linear infinite",
        "rotate-slow": "spin 6s linear infinite",
        loader: "loader1 1s infinite, loader2 1s infinite",
      },
    },
  },
};
