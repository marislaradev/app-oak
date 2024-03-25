/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenOak: '#2D9983',
        greenBtn: '#264f42',
        greenLetter: '47aa4d'
      }
    },
  },
  plugins: [],
}