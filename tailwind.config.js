/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx, ts, js, jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-login': "url('../public/images/background-login.jpg')",
        'logo-insted': "url('../public/images/logo-insted.png')"
      },
      colors: {
        'verde-insted': 'rgb(29,169,173)',
        'verde-insted-icon': 'rgba(138, 220, 222, 1)',
        'verde-texto': 'rgb(5, 40, 40)',
        'texto-input': 'rgba(250,250,250,0.75)'
      },
      spacing: {
        '17/20': '85%',
        '9/10': '90%',
        '26/30': '87.5%'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
};
