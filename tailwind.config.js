module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
