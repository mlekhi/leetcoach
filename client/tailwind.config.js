/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        // Add more fonts if needed
      },
      boxShadow: {
        'neon-blue': '0 0 10px rgba(0, 102, 255, 0.8), 0 0 20px rgba(0, 102, 255, 0.6)',
        'neon-purple': '0 0 10px rgba(153, 0, 204, 0.8), 0 0 20px rgba(153, 0, 204, 0.6)',
      },
    },
  },
  plugins: [],
}
