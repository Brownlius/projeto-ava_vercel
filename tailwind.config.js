/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx, ts, js, jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-login': "url('./images/background-login.jpg')",
        'logo-insted': "url('./images/logo-insted.png')"
      },
      colors: {
        'verde-insted': '#139FA3'
      }
    }
  },
  plugins: []
};
