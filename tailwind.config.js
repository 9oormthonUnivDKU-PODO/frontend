// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [ 'gap-4', 'gap-6', 'gap-8', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl'],
  theme: {
    extend: {
      spacing: {
        'square-lg': '40px',
        'square-xl': '56px',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(20px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(20px) rotate(-360deg)' },
        },
      },
      animation: {
        orbit: 'orbit 1.2s linear infinite',
      },
    },
  },
  plugins: [],
};
