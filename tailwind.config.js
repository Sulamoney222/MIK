/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mik: {
          red: '#C8102E',
          'red-dark': '#9B0C24',
          'red-light': '#E8233F',
          gray: '#4A4A4A',
          'gray-light': '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(200, 16, 46, 0.12)',
        'card-hover': '0 12px 40px -8px rgba(200, 16, 46, 0.2)',
        'dash': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}
