/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '24px',
        },
        screens: {
            xl: '1280px',
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
};
