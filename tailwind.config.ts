import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: "#0F172A",     // Deep Navy
                    primary: "#3B82F6",  // Athletic Blue
                    accent: "#F59E0B",   // Energy Orange
                    success: "#10B981",  // Health Green
                    bg: "#F8FAFC",       // Clean Background
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
            }
        },
    },
    plugins: [],
};
export default config;