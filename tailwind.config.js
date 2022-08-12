/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
        red: colors.red,
        yellow: colors.amber,
        blue: colors.blue,
        cyan: colors.cyan,
        indigo: colors.indigo,
        side1: '#4e73df',
        side2: '#224abe'
    }
      
    },
  },
  plugins: [],
}
