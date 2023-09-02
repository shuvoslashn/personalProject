/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            padding: '2rem',
            center: true,
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },
        extend: {
            screens: {
                xl: '1280px',
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
        },
    },
    plugins: [],
};
