/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "tani-grey": "#a3a3a3",
        "tani-green": "#0F9062",
        "tani-yellow": "#FAFF00",
        "tani-blue": "#156C99",
      },
      width: {
        552: "552px",
      },
      backgroundImage: {
        "auth": "url('/assets/images/bg-login.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
