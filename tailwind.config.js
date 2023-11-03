/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tablet: '768',
      desktop: '1440px',
    },
    colors: {
      steelBlue: '#4D96A9',
      purple: '#855FB1',
      lightPurple: '#D9B8FF',
      lightBlue: '#8FE3F9',
      black: '#28283D',
      grey: '#87879D',
      white: '#FAFAFA',
    },
    fontFamily: {
      'rhdmedium': ['"Red Hat Display Medium"'],
      'rhdblack': ['"Red Hat Display Black"'],
    },
    extend: {},
  },
  plugins: [],
}

