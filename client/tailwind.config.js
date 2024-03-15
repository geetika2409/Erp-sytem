/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      z_index : {
        "z-index" : "1"
      },
      colors: {
        "dark-blue": "#082f49",
        "light-blue": "#164e63",
        "new-color" : "rgba(0, 0, 0, 0.4)",
      }
    },
  },
  plugins: [],
}
