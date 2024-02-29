/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // NFA colors with variants
        nightShadz: {
          50: '#fcf3f8',
          100: '#fbe8f2',
          200: '#f9d1e6',
          300: '#f5acd0',
          400: '#ee78b0',
          500: '#e45092',
          600: '#d32f70',
          700: '#ac1e52', // Approved
          800: '#971d48',
          900: '#7e1d3f',
          950: '#4d0a22'
        },
        seashellPeach: {
          50: '#fff5ec', // Approved
          100: '#ffead5',
          200: '#fed0aa',
          300: '#fdaf74',
          400: '#fb823c',
          500: '#f96016',
          600: '#ea460c',
          700: '#c2320c',
          800: '#9a2912',
          900: '#7c2412',
          950: '#430f07'
        },
        bondiBlue: {
          50: '#effafc',
          100: '#d8f0f5',
          200: '#b5e0ec',
          300: '#82cbde',
          400: '#47abc9',
          500: '#2e96b8', // Approved
          600: '#277393',
          700: '#265e78',
          800: '#274f63',
          900: '#244355',
          950: '#132a39'
        },
        orient: {
          50: '#f0f8fb',
          100: '#d9edf4',
          200: '#b8dde9',
          300: '#87c4d9',
          400: '#4fa2c1',
          500: '#3386a7',
          600: '#2b6785', // Approved
          700: '#2b5a73',
          800: '#2a4b60',
          900: '#274052',
          950: '#152837'
        },
        primary: '#ac1e52',
        secondary: {
          DEFAULT: '#2b6785', // Light theme
          dark: '#2e96b8' // Dark theme
        },
        danger: '#e3342f',
        background: {
          DEFAULT: '#ffffff', // Light theme
          dark: '#152837' // Dark theme
        },
        text: {
          DEFAULT: '#132a39', // Light theme
          dark: '#fff5ec' // Dark theme
        },
        border: '#cdd5e0'
      }
    }
  },
  plugins: []
}
