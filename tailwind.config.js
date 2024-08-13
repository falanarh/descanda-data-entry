/* eslint-disable no-undef */
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-minus-64': 'calc(100vh - 64px)',
      },
      fontFamily: {
        // nunito: ["Nunito", "sans-serif"],
        // quicksand: ["Quicksand", "sans-serif"], 
        // dmsans: ["DM Sans", "sans-serif"],
        asap: ["Asap", "sans-serif"],
      },
      colors: {
        pdarkblue: "#0B588F",
        pblue: "#26AAE1",
        porange2: "#EB891B",
        pgreen: "#009B4C",
        porange: '#D95F59',
        'porange-30': 'rgba(217, 95, 89, 0.3)',
        'porange-50': 'rgba(217, 95, 89, 0.5)',
        base: '#f9f5e5',
      },
      screens: {
        'xs': '350px',
        '2xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1536px',
      },
    },
  },
  plugins: [nextui()]
}
