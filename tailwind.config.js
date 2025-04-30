/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.js'], // Adjust if needed
  theme: {
    extend: {
      keyframes: {
        'slide-out-left': {
          '0%': { transform: 'translateX(0%)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
      },
      animation: {
        'slide-out-left': 'slide-out-left 0.5s ease forwards',
        'slide-in-right': 'slide-in-right 0.5s ease forwards',
      },
    },
  },
  plugins: [],
};
