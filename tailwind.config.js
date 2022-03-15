module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
    themes: ['cupcake'],
  },
  plugins: [
    require('daisyui'),
    require('./styles/plugins/nestedGroup'),
    require('@tailwindcss/typography'),
  ],
}
