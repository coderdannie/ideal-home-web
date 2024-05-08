/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#1B54B8',
      },
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      serif: ['Work Sans', 'sans-serif'],
    },
  },

  plugins: [],
};
