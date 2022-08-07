/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*/index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Atkinson Hyperlegible', 'Roboto'],
            },
            colors: {
                'clr-primary-900': 'hsl(205,30%,27%)',
                'clr-primary-500': 'hsl(37,98%,54%)',
                'clr-primary-300': 'hsl(203,28%,79%)',
                'clr-accent-900': 'hsl(206,45%,15%)',
                'clr-accent-500': 'hsl(205,37%,55%)',
                'clr-accent-300': 'hsl(203,25%,90%)',
                'clr-neutral-100': 'hsl(0,0%,99%)',
            },
        },
    },
    plugins: [],
};
