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
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '150%' }],
        'sm': ['14px', { lineHeight: '150%' }],
        'base': ['16px', { lineHeight: '150%' }],
        'lg':['18px', {lineHeight:'120%'}],
        'xl':['20px', {lineHeight:'120%'}],
        '2xl':['24px', {lineHeight: '120%'}],
        '3xl':['30px', {lineHeight: '120%'}],
        '4xl':['36px', {lineHeight: '110%'}],
        '5xl':['48px', {lineHeight:'110%'}],
        '6xl':['60px', {lineHeight:'110%'}],
        '7xl':['72px', {lineHeight:'110%'}]
      }
    },
  },
  plugins: [],
};
