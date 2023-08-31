/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1280px',
        },
        extend: {
            colors: {},
        },
    },
    plugins: [],
};
