/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenOak: '#143C8D',
        greenBtn: '#0F1453',
        greenLetter: '#F66816'
      }
    },
  },
  plugins: [],
}