const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // => @media (min-width: 320px) { ... }
      },
      fontSize: {
        '2xs': '0.5rem',
        '3xs': '0.4rem',
        '4xs': '0.3rem',
        '5xs': '0.25rem',
        '6xs': '0.20rem',
      },
      backgroundImage: {
        cta: "url('/cta.jpg')",
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        'layout': '100px 1fr 100px',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    }
  },
  variants: {
    textFillColor: ['responsive'],
    extends: {
      backgroundColor: ['checked', 'first', 'last', 'even', 'odd'],
      padding: ['responsive', 'first', 'last'],
      margin: ['responsive', 'first', 'last'],
    },
  },
  plugins: [],
}
