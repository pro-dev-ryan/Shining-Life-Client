/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Crimson Text"'],
        button: ["Dosis"],
        textHead: ["Montserrat"],
        text: ["Nunito"],
      },
    },
  },
  plugins: [],
};
