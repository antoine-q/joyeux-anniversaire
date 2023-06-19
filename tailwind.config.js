/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'robotomono': ['Roboto Mono', 'monospaced']
      },
    },
  },
  plugins: [],
}

