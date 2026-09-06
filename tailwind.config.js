/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f5f4ef',
          100: '#e7e4d8',
          200: '#cfc8b1',
          300: '#a99f7d',
          400: '#7a6f4d',
          500: '#564c30',
          600: '#3d3522',
          700: '#2a2418',
          800: '#1a160d',
          900: '#0c0a05',
        },
        amber: {
          glow: '#f0b94c',
          deep: '#c98a2b',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(15, 12, 5, 0.45)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
