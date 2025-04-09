/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout.tsx", // Include layout file
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all files in the pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

