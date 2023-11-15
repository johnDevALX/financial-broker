/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: '#6722b5', // Replace with your custom color code
        nCustom: '#19082d',
        custom2: '#7F00FF',
        effectCustom: '#FFDC76',
        purpleCustom: '#3A3748'
      },
    },
  },
  plugins: [],
}

