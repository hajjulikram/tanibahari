/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'tani-grey': '#a3a3a3',
        'tani-green': '#0F9062',
        'tani-yellow': '#FAFF00',
        'tani-blue': '#156C99',
      },
      width: {
        552: '552px',
      },
      backgroundImage: {
        auth: "url('/assets/images/bg-login.jpg')",
      },
    },
    container: {
      padding: {
        DEFAULT: '3rem',
        sm: '4rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
