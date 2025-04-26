import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    subtle: 'hsl(var(--primary-subtle))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: '1rem',
                md: '0.75rem',
                sm: '0.375rem',
            },
            boxShadow: {
                card: '0 4px 12px -4px rgba(0, 0, 0, 0.08)',
                button: '0 2px 6px -2px rgba(0, 0, 0, 0.1)',
                subtle: '0 1px 3px rgba(0, 0, 0, 0.05)',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.5' }],
                sm: ['0.875rem', { lineHeight: '1.5' }],
                base: ['1rem', { lineHeight: '1.5' }],
                lg: ['1.25rem', { lineHeight: '1.5' }],
                xl: ['1.5rem', { lineHeight: '1.4' }],
                '2xl': ['2rem', { lineHeight: '1.3' }],
            },
            transitionProperty: {
                'all': 'background-color, color, transform, opacity, box-shadow',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;