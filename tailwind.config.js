/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{lightColor:'#04DFBE',
      darkColor:'#2D474E'}
    },
  },
  plugins: [require('tailwind-scrollbar-hide')]
}



