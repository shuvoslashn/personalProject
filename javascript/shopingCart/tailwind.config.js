/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '960px',
                xl: '1280px',
            },
            container: {
                padding: '1rem',
                center: true,
            },
        },
    },
    plugins: [],
};
