module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.7s ease-out'
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
        'w-pink': '#BE3CF1'

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
