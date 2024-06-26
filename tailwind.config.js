/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#ecedf3',
          100: '#bbbdd3',
          200: '#9599bb',
          300: '#7075a4',
          400: '#3e3e73',
          500: '#3e3e73',
          600: '#292963',
          700: '#252559',
          800: '#1d1d45',
          900: '#19193b',
        },
      }
    },
  },
  plugins: [],
}

