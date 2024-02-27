/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  darkMode: "class",
  important: true,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          green: "#50B748",
          "green-2": "#50b748", // rengga

          blue: "#0152F9",
          "blue-1": "#0E3687",
          red: "#D62223",
          "red-1": "#C10001",
          orange: "#FA7317",
          gold: "#BBA64D",
          yellow: "#EDB21D",
          neutral: "#E3D4D4",
          white: "#ffffff",
        },
        default: {
          black: "#090909",
          1: "#1C1C1E",
          2: "#3b3b3d", // before #2E2E30
          3: "#D0BD60", // rengga
          4: "#50B748", // rengga
          5: "#111111", // rengga
          6: "#004B34", // rengga dark green
          7: "#d0c184", // rengga cream
        },
        status: {
          open: "#DDAA00",
          progress: "#9B8579",
          review: "#D62223",
          sign: "#0152F9",
          approval: "#00B3B7",
          completed: "#50B748",
          deadline: "#DD001B",
        },
        custom: {
          101010: "#101010",
        },
      },
    },
  },
  plugins: [],
};
