/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38B593',
      },
      fontFamily: {
        'work-sans': "'Work Sans', sans-serif;",
      },
    },
  },
  plugins: [],
};
