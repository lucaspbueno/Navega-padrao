/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Documentação/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}