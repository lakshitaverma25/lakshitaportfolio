/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateZ(30px)' },
          '50%': { transform: 'translateY(-20px) translateZ(30px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) translateZ(30px) rotate(0deg)' },
          '50%': { transform: 'translateY(20px) translateZ(30px) rotate(180deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
};
