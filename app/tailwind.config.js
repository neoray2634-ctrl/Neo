/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        gemzy: {
          bg: '#F7F4FF',
          text: '#111827',
          subtext: '#6B7280',
        },
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}

