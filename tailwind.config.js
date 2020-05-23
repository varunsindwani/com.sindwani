module.exports = {
  theme: {
    linearGradientDirections: { // defaults to these values
      't': 'to top',
      'tr': 'to top right',
      'r': 'to right',
      'br': 'to bottom right',
      'b': 'to bottom',
      'bl': 'to bottom left',
      'l': 'to left',
      'tl': 'to top left',
    },
    linearGradientColors: { // defaults to {}
      'red': '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
      'highlight': ['#63B3ED 40%', 'rgba(0,0,0,0) 40%'],
      'full': ['#63B3ED 100%', 'rgba(0,0,0,0) 40%']
    },
    radialGradientShapes: { // defaults to this value
      'default': 'ellipse',
    },
    radialGradientSizes: { // defaults to this value
      'default': 'closest-side',
    },
    radialGradientPositions: { // defaults to these values
      'default': 'center',
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
    radialGradientColors: { // defaults to {}
      'red': '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
    },
    conicGradientStartingAngles: { // defaults to this value
      'default': '0',
    },
    conicGradientPositions: { // defaults to these values
      'default': 'center',
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
    conicGradientColors: { // defaults to {}
      'red': '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      'checkerboard': ['white 90deg', 'black 90deg 180deg', 'white 180deg 270deg', 'black 270deg'],
    },
    repeatingLinearGradientDirections: theme => theme('linearGradientDirections'), // defaults to this value
    repeatingLinearGradientColors: theme => theme('linearGradientColors'), // defaults to {}
    repeatingLinearGradientLengths: { // defaults to {}
      'sm': '25px',
      'md': '50px',
      'lg': '100px',
    },
    repeatingRadialGradientShapes: theme => theme('radialGradientShapes'), // defaults to this value
    repeatingRadialGradientSizes: { // defaults to this value
      'default': 'farthest-corner',
    },
    repeatingRadialGradientPositions: theme => theme('radialGradientPositions'), // defaults to this value
    repeatingRadialGradientColors: theme => theme('radialGradientColors'), // defaults to {}
    repeatingRadialGradientLengths: { // defaults to {}
      'sm': '25px',
      'md': '50px',
      'lg': '100px',
    },
    repeatingConicGradientStartingAngles: theme => theme('conicGradientStartingAngles'), // defaults to this value
    repeatingConicGradientPositions: theme => theme('conicGradientPositions'), // defaults to this value
    repeatingConicGradientColors: { // defaults to {}
      'red': '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      'starburst': ['white 0 5deg', 'blue 5deg'],
    },
    repeatingConicGradientLengths: { // defaults to {}
      'sm': '10deg',
      'md': '20deg',
      'lg': '40deg',
    },
    fontFamily: {
      'main': ["Rubik", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Cantarell", 'Open Sans', 'Helvetica Neue', "sans-serif"],
      'hack':['hack', "-apple-system",'monospace', 'sans-serif'],
    }
  },
  variants: {
    backgroundImage: ['responsive'], // this is for the "bg-none" utility
    linearGradients: ['responsive'],
    radialGradients: ['responsive'],
    conicGradients: ['responsive'],
    repeatingLinearGradients: ['responsive'],
    repeatingRadialGradients: ['responsive'],
    repeatingConicGradients: ['responsive'],
  },
  plugins: [
    require('tailwindcss-gradients'),
  ]

}