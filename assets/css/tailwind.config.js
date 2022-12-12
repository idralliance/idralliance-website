const themeDir = __dirname + '/../../';
const enablePurge = (process.env.HUGO_ENVIRONMENT === 'production' ? true : false)

module.exports = {
  purge: {
    enabled: enablePurge,
    content: [themeDir + '/**/*.html'],
    options: {
      keyframes: true,
    },
  },
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1140px',
    },
    colors: {

      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#000000',
      },
      neutral: {
        100: '#F2EFE7',
        300: '#DAD5C9',
        DEFAULT: '#A19D92',
        500: '#A19D92',
        700: '#5E5B55',
        900: '#3E3B39',
      },
      life: {
        50: '#E9F3EE',
        100: '#B1CFBF',
        300: '#8EB8A2',
        DEFAULT: '#72AA9F',
        500: '#72AA9F',
        700: '#5F9E91',
        900: '#4E8076',
        1000: '#345851',
      },
      sun: {
        50: '#F7EED7',
        100: '#F4E2B5',
        300: '#F2D793',
        DEFAULT: '#EFCB71',
        500: '#EFCB71',
        700: '#EBBC47',
        900: '#E8B128',
        1000: '#CB9717',
      },
      desert: {
        50: '#F8E3D0',
        100: '#F7CCA6',
        300: '#F6B67D',
        DEFAULT: '#F5A053',
        500: '#F5A053',
        700: '#F1882A',
        900: '#DE7210',
        1000: '#A4530B',
      },
      fire: {
        50: '#F5D1C7',
        100: '#F2A995',
        300: '#EE8062',
        DEFAULT: '#EA5830',
        500: '#EA5830',
        700: '#BC2E07',
        900: '#972506',
        1000: '#5C1805',
      },
    },
    backgroundSize: {
      '50%': '50%',
    },
    spacing: {
      '0.5': '4px',
      '0.75': '6px',
      '1': '8px',
      '2': '16px',
      '3': '24px',
      '4': '32px',
      '5': '40px',
      '6': '48px',
      '7': '56px',
      '8': '64px',
      '9': '72px',
      '10': '80px',
      '11': '88px',
      '12': '96px'
    },
    fontFamily: {
      body: ['Source Sans Pro', 'sans-serif'],
      display: ['Source Sans Pro', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
