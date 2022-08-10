/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*/index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Atkinson Hyperlegible', 'Roboto'],
            },
            fontSize: {
                'custom-base': ['1.25rem', '1.5rem'],
                'custom-l': ['1.625rem', '2rem'],
                'custom-xl': ['2rem', '2.5rem'],
                'custom-2xl': ['2.5rem', '3.125rem'],
            },
            colors: {
                'clr-primary-900': 'hsl(205,30%,27%)',
                'clr-primary-500': 'hsl(37,98%,54%)',
                'clr-primary-300': 'hsl(203,28%,79%)',
                'clr-accent-900': 'hsl(206,45%,15%)',
                'clr-accent-500': 'hsl(37,100%,65%)',
                'clr-accent-400': 'hsl(205,37%,55%)',
                'clr-accent-300': 'hsl(203,25%,90%)',
                'clr-accent-200': 'hsl(203,22%,55%)',
                'clr-neutral-100': 'hsl(0,0%,99%)',
                'clr-neutral-800': 'hsla(0,0%,0%,0.5)',
            },
            spacing: {
                2.5: '0.625rem',
            },
        },
    },
    plugins: [],
};
