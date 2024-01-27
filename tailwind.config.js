/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#f2f2f2", // colors.neutral[200],
          DEFAULT: colors.neutral[50],
          hover: colors.neutral[200],
          border: colors.neutral[300],
          text: colors.neutral[400],
          dark: colors.neutral[700],
          ["dark-hover"]: colors.neutral[800],
        }
      }
    },
  },
  plugins: [plugin(({ addVariant }) => {
    addVariant('>', '&>*')
  })],
}
