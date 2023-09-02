/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideInEllipticTopFwd: {
          '0%': {
            transform: 'translateY(-600px) rotateX(-30deg) scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0) rotateX(0) scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideIn:
          'slideInEllipticTopFwd 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
      },
    },
  },
  plugins: [],
};
