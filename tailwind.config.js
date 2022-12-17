const colors = require("tailwindcss/colors");

const customColors = {
  transparent: "transparent",
  bg: "#ffffff",
  fg: "#212529",
  accent: "#C049FF",
};

const monoStack = [
  "ui-monospace",
  "SFMono-Regular",
  "SF Mono",
  "Consolas",
  "Liberation Mono",
  "Menlo",
  "monospace",
].join(",");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      mono: monoStack,
    },
    colors: {
      ...colors,
      ...customColors,
      white: colors.white,
      black: colors.black,
    },
  },
  variants: {
    extend: {
      colors: {
        ...customColors,
      },
    },
  },
};
