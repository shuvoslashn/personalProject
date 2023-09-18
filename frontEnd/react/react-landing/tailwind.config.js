/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        container: {
            padding: "2rem",
            center: true,
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
        extend: {
            screens: {
                xl: "1280px",
            },
            keyframes: {
                righttoleft: {
                    "0%": {
                        transform: "translateX(0%)",
                    },
                    "100%": {
                        transform: "translateX(-100%)",
                    },
                },
                lefttoright: {
                    "0%": {
                        transform: "translateX(-100%)",
                    },
                    "100%": {
                        transform: "translateX(0%)",
                    },
                },
            },
            animation: {
                "spin-slow": "spin 8s linear infinite",
                "right-to-left": "righttoleft 50s linear infinite",
                "left-to-right": "lefttoright 50s linear infinite",
            },
        },
    },
    plugins: [],
};
