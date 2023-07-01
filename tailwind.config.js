/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    width: {
    "100%": "100%",
    "50%": "50%",
    "70%": "70%",
    "30%": "30%",
    },
    height: {
      "40rem": "40rem",
      "100%": "100%",
      "50px": "50px",
    },
    fontFamily: {
      'outfit': 'Outfit', 
      "sans": "'Fraunces', serif"
    },
    maxWidth: {
    "666px": "666px"
    },
    colors: {
      "Dark-cyan": "hsl(158, 36%, 37%)",
      "Cream": "hsl(30, 38%, 92%)",
      "Very-dark-blue": "hsl(212, 21%, 14%)",
      "Dark-grayish-blue":" hsl(228, 12%, 48%)",
      "white": "hsl(0, 0%, 100%)"
    },
    extend: {
    },
  },
  plugins: [],
}

