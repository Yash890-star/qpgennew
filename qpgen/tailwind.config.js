/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js","./components/*.js"],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
      }
    },
  },
  plugins: [],
}
