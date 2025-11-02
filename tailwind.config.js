/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-orange': '#fb923c',
        'warm-yellow': '#fbbf24',
        'warm-pink': '#f472b6',
        'warm-purple': '#c084fc',
        'warm-blue': '#60a5fa',
        'warm-green': '#34d399',
      },
      animation: {
        'pop': 'pop 0.3s ease-out',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'float': 'float 1s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 0.6s ease-out',
        'confetti': 'confetti 1s ease-out',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.8) rotate(-5deg)', opacity: '0' },
          '50%': { transform: 'scale(1.1) rotate(5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
