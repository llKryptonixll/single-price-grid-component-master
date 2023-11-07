/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"]
      },
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        bright_yellow: "hsl(71, 73%, 54%)",
        light_gray: "hsl(204, 43%, 93%)",
        grayish_blue: "hsl(218, 22%, 67%)"
      }
    },
  },
  plugins: [],
}

