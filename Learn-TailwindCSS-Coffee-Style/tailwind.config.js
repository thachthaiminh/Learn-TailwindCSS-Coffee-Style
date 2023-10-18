/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        coffee: {
          50: "#e8d6d0",
          200: "#c89f94",
          400: "#A25F4B",
          600: "#744838",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown .6s ease-in-out",
        fadeIn: "fadeIn .6s ease-in-out",
      },
      backdropImage: {
        "slider-bg": 'url("./assets/bg_slider.png")',
      },
    },
  },
  plugins: [],
};
