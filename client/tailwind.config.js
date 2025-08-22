/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],

      },
    },
  },
  plugins: [],
}
