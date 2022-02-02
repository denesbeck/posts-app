module.exports = {
    content: ['./src/components/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                slideInBottom: {
                    '0%': {
                        transform: 'translateY(2rem)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
                textFocusIn: {
                    '0%': {
                        filter: 'blur(12px)',
                        opacity: '0',
                    },
                    '100%': {
                        filter: 'blur(0px)',
                        opacity: '1',
                    },
                },
                jumpingDots: {
                    '10%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-20px)',
                    },
                },
            },
            animation: {
                slideInBottom: 'slideInBottom 0.5s ease-in-out',
                textFocusIn: 'textFocusIn 0.8s ease-in-out',
            },
        },
    },
    plugins: [],
}
