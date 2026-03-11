import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#72ade8",
          600: "#72ade8",
        },
        emerald: {
          500: '#77cebb',
          600: '#77cebb',
        }
      },
      fontFamily: {
        sans: ["EuclidCircularA", "system-ui", "sans-serif"],
        heading: ["Sora", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
