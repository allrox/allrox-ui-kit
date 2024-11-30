/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#F4F3FF",
          100: "#EBEAFD",
          200: "#DBD7FD",
          300: "#C0B8FA",
          400: "#A08FF6",
          500: "#8162F0",
          600: "#6D3DE6",
          700: "#602ED3",
          800: "#5026B1",
          900: "#442191",
          950: "#281362"
        },
        secondary:{
          50: "#F7FCE9",
          100: "#EEF8CF",
          200: "#DDF1A5",
          300: "#C4E670",
          400: "#A1D32E",
          500: "#8CBD25",
          600: "#6D9719",
          700: "#537318",
          800: "#435B19",
          900: "#3A4E19",
          950: "#1D2B08",
        }
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '150%' }],
        'sm': ['14px', { lineHeight: '150%' }],
        'base': ['16px', { lineHeight: '150%' }],
        'lg': ['18px', { lineHeight: '120%' }],
        'xl': ['20px', { lineHeight: '120%' }],
        '2xl': ['24px', { lineHeight: '120%' }],
        '3xl': ['30px', { lineHeight: '120%' }],
        '4xl': ['36px', { lineHeight: '110%' }],
        '5xl': ['48px', { lineHeight: '110%' }],
        '6xl': ['60px', { lineHeight: '110%' }],
        '7xl': ['72px', { lineHeight: '110%' }]
      },
      fontWeight:{
        thin: 100,
        regular: 300,
        medium: 400,
        bold: 600,
        black: 900
      }
    },
  },
  plugins: [],
};
