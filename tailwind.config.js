/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Documentação/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'other-blue': '#00142F',
      },
    },
  },
  plugins: [require("daisyui")],
}