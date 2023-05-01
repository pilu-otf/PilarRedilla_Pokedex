/**@type {import('tailwindcss').Config}*/

const daisyui = require('daisyui');

module.exports = {
  content: ["./*.html", ".assets/**/*.sass", "./assets/**/*/.scss", "./app/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/colors/themes")["[data-theme=cupcake]"],
          "--rounded-btn": "1.5rem",
        },
      },
    ],
  },
}