/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  // safelist: [
  //   {
  //     pattern: /./, // the "." means "everything"!! REMOVE in production
  //   },
  // ],
  content: [
    './src/**/*.{html,js}',
    './src/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
      screens: {
        'smx': '700px',
        'mdx': '860px',
        'xle': '1320px',
      },
    },
    colors: {
      red: {
        100: "#edced5",
        200: "#dc9dab",
        300: "#ca6c81",
        400: "#b93b57",
        500: "#a70a2d",
        DEFAULT: "#a70a2d",
        550: "#8a152f",
        600: "#860824",
        700: "#64061b",
        800: "#430412",
        900: "#210209",
      },
      green: {
        100: "#ccd9db",
        200: "#99b3b6",
        300: "#668d92",
        400: "#33676d",
        500: "#004149",
        DEFAULT: "#004149",
        600: "#00343a",
        700: "#00272c",
        800: "#001a1d",
        900: "#000d0f",
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
  plugins: [
    // require('preline/plugin'),
  ],
}
