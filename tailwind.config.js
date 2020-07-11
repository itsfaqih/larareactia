const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './resources/js/**/*.jsx',
    './resources/views/**/*.blade.php',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
