/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        nightsky: '#3E3B4F',
        classicblue: '#34558B',
        provence: '#A3D3FF',
        babyblue: '#D1E8FF',
        monument: '#A9B1B7',
      },
    },
  },
  plugins: [],
}
