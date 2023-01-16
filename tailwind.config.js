/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.{html,js}",
    "index.html"
  ],
  content: ["./src/**/*.{html,js}",
  "index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
