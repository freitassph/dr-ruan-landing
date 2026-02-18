import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0D3D3D', // Deep Deep Teal
                    light: '#145252',
                    dark: '#051A1A',
                },
                gold: {
                    DEFAULT: '#C6A130', // Deep Golden (Better Contrast)
                    500: '#C6A130',
                    400: '#E5C058', // Highlight
                    600: '#9C7E1C', // Dark Gold for Text
                    glow: '#FFD700',
                },
                surface: {
                    DEFAULT: '#FFFFFF',
                    cream: '#FAFAF9',
                    glass: 'rgba(255, 255, 255, 0.05)',
                },
                border: "hsl(var(--border))", // Fixed typo
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            boxShadow: {
                'gold-glow': '0 0 40px -10px rgba(212, 175, 55, 0.4)',
                'deep-elevation': '0 30px 60px -12px rgba(0, 0, 0, 0.5)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            },
            backgroundImage: {
                'luxury-gradient': 'linear-gradient(135deg, #0D3D3D 0%, #051A1A 100%)',
                'gold-gradient': 'linear-gradient(to right, #B49020, #D4AF37, #F4D06F, #D4AF37, #B49020)',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
                    '50%': { opacity: '0.3', transform: 'scale(1.1)' },
                },
                'pulse-slower': {
                    '0%, 100%': { opacity: '0.1', transform: 'scale(1.1)' },
                    '50%': { opacity: '0.2', transform: 'scale(1)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                shimmer: 'shimmer 8s linear infinite',
                'pulse-slow': 'pulse-slow 15s ease-in-out infinite',
                'pulse-slower': 'pulse-slower 20s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
            }
        },
    },
    plugins: [],
};
export default config;
