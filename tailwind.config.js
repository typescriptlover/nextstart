const colors = require('tailwindcss/colors');

module.exports = {
   mode: 'jit',
   content: ['./src/**/*.{ts,tsx}'],
   theme: {
      fontFamily: {
         inter: [
            'Inter var',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji',
         ],
      },
      extend: {
         colors: {
            brand: {
               100: '#414140',
               200: '#313030',
               300: '#1f1f21',
               350: '#1b1b1d',
               400: '#161618',
            },
            ...colors,
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
