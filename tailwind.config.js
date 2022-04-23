module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px'
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
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'pulse-0': 'pulse 1s ease-in-out infinite',
        'pulse-1': 'pulse 2s ease-in-out infinite',
        'pulse-2': 'pulse 0.5s ease-in-out infinite'
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
        secondary: '#FF5177',
        tertiary: '#FF8850',
        quarternary: '#B53BFF',
        light: '#444E59',
        'w-pink': '#BE3CF1',
        'w-gray': '#848483',
        'w-red': '#FF5353',
        'w-white': '#ACACAC'
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
