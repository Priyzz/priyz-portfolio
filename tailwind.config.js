/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#83a4e9',
        secondary: '#5e6f9b',
        dark: "#2c3c5d",
        light: '#c8cfe0',
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

