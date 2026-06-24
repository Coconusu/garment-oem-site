/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0a1628",
          900: "#0f1f38",
          800: "#16304f",
          700: "#1f4366",
        },
        steel: {
          600: "#3d6b94",
          500: "#4f82af",
        },
        amber: {
          600: "#c2790f",
          500: "#d98e1f",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
