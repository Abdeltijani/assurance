/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightBackground: "#FDF8EE",
        brightBlack: "#0f1728",
        lightText: "#959595",
      },
      spacing: {
        23: "22rem",
        12: "3rem",
        13: "8rem",
      },
    },
  },
  plugins: [],
};
