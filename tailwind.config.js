const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      },
    },
    screens: {
      xl: {max: '1279px'},
      lg: {max: '1023px'},
      md: {max: '767px'},
      sm: {max: '639px'},
      xs: {max: '375px'},
    },
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        black: '#171722',
        blue: '#005ca9',
        greyOslo: '#91959e',
        dynastyDragon: '#4a56ec',
        graniteGray: '#575757',
        grey: '#e1dddd',
        lightBlue: '#56a8da',
        lightGrey: '#f3f3f3',
        mainlyBlue: '#e6eaee',
        marine: '#06365e',
        mountainMist: '#999999',
        nobel: '#989898',
        paleGrey: '#ecedf0',
        peacockBlue: '#005ca9',
        yellow: '#fde513',
        yellowDaisy: '#fff367',
      },
      borderRadius: {
        DEFAULT: '22px',
        10: '10px',
        4: '4px',
        26: '26px',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tw-elements/dist/plugin'),
  ],
  darkMode: 'class',
};
