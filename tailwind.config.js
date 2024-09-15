/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['Kaushan Script', 'cursive'],
        fascinate: ['"Fascinate Inline"', 'cursive'], 
        nerko: ['"Nerko One"', 'cursive'],
        montserrat:['"Montserrat"', 'sans-serif']
      },
      wordSpacing: {
        '1': '0.1em',
        '2': '0.2em',
        '3': '0.3em',
        '4': '0.4em',
        '5': '0.5em',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.word-spacing-1': {
          'word-spacing': '0.1em',
        },
        '.word-spacing-2': {
          'word-spacing': '0.2em',
        },
        '.word-spacing-3': {
          'word-spacing': '0.3em',
        },
        '.word-spacing-4': {
          'word-spacing': '0.4em',
        },
        '.word-spacing-5': {
          'word-spacing': '0.5em',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

