/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['gg sans', 'sans-serif'],
      },
      colors: {
        header: "#33416a",
        footer: {
          light: "#1a2234",
          dark: "#1f2937"
        },
        primary: {
          light: "#0f172a",
          dark: "#f8fafc"
        },
        secondary: {
          light: "#64748b",
          dark: "#94a3b8"
        },
        accent: {
          light: "#33416a",
          dark: "#33416a"
        },
        background: {
          light: "#f8fafc",
          dark: "#0f172a"
        }
      },
    },
  },
  plugins: [],
}; 