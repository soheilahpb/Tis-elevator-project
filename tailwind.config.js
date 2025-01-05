/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: " Arial, Helvetica, sans-serif",
        tis1: "first_font",
        tis2 : "second_font"

      },
      backgroundImage: {
        'SecondImage' : "url('../imgs/_head_image2.jpg')",
        'ThirdImage' : "url('../imgs/_head_image3.JPEG')",
        'ForthImage' : "url('../imgs/_head_image4.jpg')", 
        'proImage' : "url('../imgs/projects.jpg')"
      },
      animation: {
        whiteSpace: 'tab 0.4s linear infinite alternate',
      }
    },
  },
  plugins: [],
}