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
        'verde-insted': 'rgb(19,159,163)',
        'verde-insted-icon': 'rgba(19,159,163,0.38)',
        'verde-texto': 'rgb(5,90,80)'
      },
      spacing: {
        '17/20': '85%',
        '9/10': '90%',
        '26/30': '87.5%'
      }
    }
  },
  plugins: []
};
