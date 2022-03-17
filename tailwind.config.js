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
      padding: '1rem',
    },
    namedGroups: ['a', 'b', 'c', 'd'],
    extend: {
      spacing: {
        'view-height-fit': 'calc(100vh-var(--header-height))',
        header: 'var(--header-height)',
        'container-offset': '1rem',
      },
    },
  },
  daisyui: {
    themes: [
      'lofi',
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
  },
  plugins: [
    require('daisyui'),
    require('./styles/plugins/nestedGroup'),
    require('@tailwindcss/typography'),
  ],
})
