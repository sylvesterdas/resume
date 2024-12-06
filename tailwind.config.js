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
          DEFAULT: '#2F4F4F',
          dark: '#1A2F2F'
        },
        accent: '#8FBC8F',
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#E5E5E5'
        }
      }
    }
  },
  plugins: [],
};
