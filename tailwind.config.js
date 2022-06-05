module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        xsm: '400px',
        xsl: '500px'
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        pulse: {
          '0%': {
            transform: 'scale(1.1)'
          },
          '50%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(1.1)'
          }
        },
        'pulse-slow': {
          '0%': {
            transform: 'scale(1.05)',
            backgroundColor: '#FF457E'
          },
          '25%': {
            transform: 'scale(1)',
            backgroundColor: '#FF5353'
          },
          '50%': {
            transform: 'scale(1.05)',
            backgroundColor: '#B53BFF'
          },
          '75%': {
            transform: 'scale(1)',
            backgroundColor: '#FF5353'
          },
          '100%': {
            transform: 'scale(1.05)',
            backgroundColor: '#FF457E'
          }
        },
        spin: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'pulse-0': 'pulse 1s ease-in-out infinite',
        'pulse-1': 'pulse 2s ease-in-out infinite',
        'pulse-2': 'pulse 0.5s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 7s ease-in-out infinite',
        'fade-top': 'spin 1s linear'
      },
      saturate: {
        15: '.15',
        25: '.25'
      },
      maxWidth: {
        small: '200px'
      },
      fontFamily: {
        mulish: ['Mulish'],
        source: ['Source Sans Pro']
      },
      colors: {
        primary: '#222324',
        'primary-transparent': 'rgba(34,35,36,0.7)',
        secondary: '#FF5177',
        tertiary: '#FF8850',
        quarternary: '#B53BFF',
        light: '#444E59',
        'w-pink': '#BE3CF1',
        'w-gray': '#848483',
        'w-red': '#FF5353',
        'w-white': '#ACACAC',
        'w-orange': '#FF8F4A',
        'w-pink-2': '#FF457E',
        'w-violet': '#D940C1'
      },
      linearBorderGradients: {
        directions: {
          // defaults to these values
          t: 'to top',
          tr: 'to top right',
          r: 'to right',
          br: 'to bottom right',
          b: 'to bottom',
          bl: 'to bottom left',
          l: 'to left',
          tl: 'to top left'
        },
        colors: {
          primary: ['#FF5177', '#FF8850']
        },
        background: {
          light: '#222324',
          dark: '#222324'
        },
        borders: {
          // defaults to these values (optional)
          1: '1px',
          2: '2px',
          4: '4px'
        }
      }
    }
  },
  plugins: [require('tailwindcss-border-gradient-radius')]
}
