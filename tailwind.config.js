/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the app directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the components directory
    "./layout.tsx", // Include layout file
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Existing plugin
    require('tailwindcss-filters'), // Existing plugin
    require('@tailwindcss/typography'), // This is important for the prose classes
  ],
};

