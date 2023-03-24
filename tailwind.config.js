import { colors } from './src/assets/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ './src/**/*.{handlebars,hbs,ts}' ],
    theme:   {
        colors:     colors,
        fontFamily: {
            mabryPro:        'Mabry Pro',
            playfairDisplay: 'Playfair Display',
            manrope:         'Manrope',
        },
        borderRadius: {
            none: '0px', // native from tailwindcss
            sm:   '.5rem', // 8px
            md:   '0.75rem', // 12px
            lg:   '1.25rem', // 20px
            xl:   '3rem', // 48px
            full: '9999px', // native from tailwindcss
        },
        extend: {},
    },
    plugins: [],
};
