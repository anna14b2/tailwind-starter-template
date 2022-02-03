module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#CCCCCD",
      secondary: "#121827",
      accent: "#FF66BA",
      graytone: "#EDEDED",
    },
    fontFamily: {
      poppins: "'Poppins', system-ui, sans-serif",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
