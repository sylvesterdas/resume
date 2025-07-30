/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A362F',
          dark: '#0F1F1A'
        },
        accent: {
          DEFAULT: '#00A86B',
          dark: '#008C5A'
        },
        text: {
          DEFAULT: '#E0FFE0',
          muted: '#A0C0A0'
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
