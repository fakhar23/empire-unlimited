/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        istok: ["Istok Web", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "dim-grey-text": "#A7A7A7",
        "grey-background": "#696969",
        "brand-orange": "#F30",
        "background-black": "#161410", // The color you wanted to add
      },
    },
  },
  plugins: [],
};
