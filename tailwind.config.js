/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Antique brass/copper — evokes bag hardware, rivets, leather
        // goods. Replaces the generic indigo used in the first pass,
        // which read as a templated tech-SaaS default rather than a
        // premium manufacturing brand.
        brand: {
          50: '#fbf3e9',
          100: '#f6e4ce',
          200: '#ecc69a',
          300: '#e0a662',
          400: '#d0883b',
          500: '#b96e24',
          600: '#98591d',
          700: '#784618',
          800: '#5c3714',
          900: '#422810',
        },
        // Deep wine/burgundy — pairs with brass for a restrained,
        // premium two-tone gradient instead of a rainbow indigo/
        // purple/pink sweep.
        wine: {
          50: '#fbf0f1',
          100: '#f3d7da',
          200: '#e4a9af',
          300: '#d27981',
          400: '#be525d',
          500: '#8c3349',
          600: '#742a3d',
          700: '#5c2231',
          800: '#451a25',
          900: '#2f121a',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Avoid Tailwind's own preflight fighting with Angular Material's base styles
    preflight: false,
  },
};
