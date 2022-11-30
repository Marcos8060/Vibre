/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#1A1A1A",
      white: "#FFFFFF",
      gray: "#CACACA",
      grey: "#6F7072",
      red: "#D23F57",
      green: "#F6F9FC",
    },
    height: {
      10: "10vh",
      20: "20vh",
      70: "70vh",
      80: "80vh",
      90: "90vh",
      100: "100vh",
    },
    width: {
      10: "10vw",
      20: "20vw",
      40:"40vw",
      70: "70vw",
      80: "80vw",
      100: "100vw",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
