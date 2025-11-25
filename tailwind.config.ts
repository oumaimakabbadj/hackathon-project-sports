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
                sport: {
                    primary: "#3B82F6", // Athletic Blue
                    secondary: "#10B981", // Health Green
                    dark: "#1E293B",
                    light: "#F1F5F9",
                }
            },
        },
    },
    plugins: [],
};
export default config;