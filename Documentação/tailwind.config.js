/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Documentação/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'other-blue': '#00142F',
      },
    },
    daisyui: {
      themes: ["light"],
    },
  },
  plugins: [require("daisyui")],
}