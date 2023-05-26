module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      retro: {
        blue: '#064C72',
        cream: '#ECAE7D',
        green: {
          DEFAULT: '#8DB4AD',
          dark: '#026C80',
        },
        orange: '#ED6335',
        red: '#E9311A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
