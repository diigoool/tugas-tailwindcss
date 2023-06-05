/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./dist/img/1.svg')",
      },

      colors: {
        white: "#F2F2F2",
        black: "#343434",
        maincolor: "#768948",
      },
    },
  },
  plugins: [],
};
