const withAnimations = require('animated-tailwindcss')
module.exports = withAnimations({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './libs/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: '1452px',
      },
      padding: {
        DEFAULT: 'var(--container-offset)',
      },
    },
    namedGroups: ['a', 'b', 'c', 'd'],
    extend: {
      fontFamily: {
        heading: ['Maitree', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        header: 'var(--header-height,144px)',
        'view-height-fit': 'calc(100vh - var(--header-height,144px))',
        'container-offset': 'var(--container-offset)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          primary: '#ab92f7',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('./styles/plugins/nestedGroup'),
    require('@tailwindcss/typography'),
  ],
})
