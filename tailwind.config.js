/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding:'20px',
    },

    extend: {
      colors: {
        primary: '#E50914',
        dark: '#0f172a',
        secondary: '#B81D24'


      }
    },
  },
  plugins: [],
}

