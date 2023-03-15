/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    screens: {
      'mobile': '800px',
      'desktop': '1200px'
    },
    extend: {
      colors: {
        'dark-text': '#13141F',
        'yellow': '#FFED00',
        'green': '#00DBB3',
        'pink': '#E95B8D',
      },
    },
  },
  plugins: [],
}
