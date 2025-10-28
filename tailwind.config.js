/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       colors: {
        purpleCustom: "#E977F5", 
        blueCustom: "#3DE0FC",

        navyDark: "#042142",
        navyMedium: "#153C6A",
        blueMain: "#2475AC",
        purpleDeep: "#733E85",      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

