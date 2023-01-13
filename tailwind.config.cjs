/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        blink: "blink 1.2s steps(1, start) infinite",
      },
      colors: {
        primary: {
          DEFAULT: "#292d3e",
          dark: "#191c26",
          medium: "#394057",
          light: "#545e80",
        },
        secondary: {
		  DEFAULT: "#c3cedb",
          dark: "#9fa8b3",
        },
        accent: {
          DEFAULT: "#c792ea",
          light: "#e1acff",
          dark: "#9a72b5",
        },
      },
    },
  },
  plugins: [],
};
