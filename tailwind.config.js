/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // All files in the src folder with these extensions
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        MerriWeatherBold: ["MerriWeatherBold", "sans-serif"],
        MerriWeatherLightItalic: ["MerriWeatherLightItalic", "sans-serif"],
        MerriWeatherLight: ["MerriWeatherLight", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
