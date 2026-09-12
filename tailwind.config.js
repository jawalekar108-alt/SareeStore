/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FBE9DA',
        clay: '#E8875E',
        ink: '#171512',
      },
      maxWidth: {
        content: '1440px',
      },
    },
  },
  plugins: [],
}
