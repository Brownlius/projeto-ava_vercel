/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx, ts, js, jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-login': "url('../public/images/background-login.jpg')",
        'logo-insted': "url('../public/images/logo-insted.png')",
        'relogio-icon': "url('../public/images/clock.png')"
      },
      colors: {
        'verde-insted': 'rgb(29, 169, 173)',
        'verde-insted-icon': 'rgba(138, 220, 222, 1)',
        'verde-texto': 'rgb(5, 40, 40)',
        'texto-input': 'rgba(250,250,250,0.75)',
        'cor-de-fundo': 'rgb(250,255,254)',

        'dark-cor-de-fundo': 'rgb(28, 56, 58)',
        'dark-verde-insted': 'rgb(5, 40, 40)',
        'dark-verde-texto': '#accfc8',
        'dark-verde-insted-icon': 'rgb(32, 81, 85)'
      },
      spacing: {
        '17/20': '85%',
        '9/10': '90%',
        '26/30': '87.5%'
      },
      boxShadow: {
        sm: '-2px 1px 6px rgba(5, 40, 40, 0.175)',
        md: '-3px 2px 9px rgba(5, 40, 40, 0.2)'
      },
      keyframes: {
        aparecer: {
          from: { opacity: '0%' },
          to: { opacity: '100%' }
        },
        abrir: {
          from: { height: '5%', background: 'rgb(29, 169, 173)' },
          to: { height: '100%', background: 'rgb(240,255,250)' }
        },
        fechar: {
          from: { height: '100%', background: 'rgb(240,255,250)' },
          to: { height: '5%', background: 'rgb(29, 169, 173)' }
        }
      },
      animation: {
        abrir: 'abrir 1.25s ease 0s'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide'), [require('@tailwindcss/forms')]]
};
