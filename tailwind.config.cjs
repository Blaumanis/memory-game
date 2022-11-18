/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#152938',
        'orange': '#fda214',
        'buttonLight': '#bcced9',
        'buttonDark': '#304859',
        'grayBlueHover': '#6395b8',
        'lightText': '#fcfcfc',
        'blueText': '#7191a5',
        'infoBg': '#dfe7ec',
        'moduleGray': '#8c99a8',
        
      },
      gridTemplateColumns:{
        'auto': ''
      }
  },
  plugins: [],
}
}

