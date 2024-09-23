import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
        serif: ['Integral CF', ...defaultTheme.fontFamily.serif],
      },
      // Colors
      colors: {
        red: '#FF3333',
        yellow: '#FFC633',
        grey: '#F0F0F0',
        green: '#01AB31',
        black: {
          DEFAULT: '#000000',
          light: '#00000060',
          'light-extra': '#00000040',
        },
      },
      // Border
      borderRadius: {
        medium: '20px',
        large: '62px',
      },
      // Spacing
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
