/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#f59e0b',
          hover: '#f97316',
        },
        dark: {
          DEFAULT: '#0a0a0e',
          card: 'rgba(255,255,255,0.03)',
          border: 'rgba(255,255,255,0.06)',
        },
      },
    },
  },
  plugins: [],
};
