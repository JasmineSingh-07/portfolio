/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#080D11',
          card: '#0F151C',
          cardHover: '#151E28',
          border: '#1A232E',
          borderLight: '#253242',
          text: '#F3F4F6',
          muted: '#9CA3AF',
          coral: '#FF756B',
          coralHover: '#FF5C50',
          coralMuted: 'rgba(255, 117, 107, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
