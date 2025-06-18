import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-bluecolor-1": "rgba(36, 47, 101, 1)",
        "dark-bluecolor-10": "rgba(12, 16, 34, 1)",
        "dark-bluecolor-3": "rgba(109, 116, 152, 1)",
        "dark-bluecolor-5": "rgba(182, 186, 204, 1)",
        "light-bluecolor-6": "rgba(213, 242, 250, 1)",
        white: "rgba(255, 255, 255, 1)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "kit-baliniz-com-inter-light": ["Inter", "Helvetica"],
        "kit-baliniz-com-semantic-item": ["Mukta", "Helvetica"],
        "kit-baliniz-com-semantic-link": ["Font Awesome 5 Free", "Helvetica"],
        'inter': ['Inter', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'mukta': ['Mukta', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'figtree': ['Figtree', 'sans-serif'],
        sans: [
          "Outfit",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "shadow-1": "0px 20px 40px 0px rgba(82, 129, 236, 0.2)",
        "shadow-2": "0px 25px 40px 0px rgba(82, 129, 236, 0.05)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { 
      center: true, 
      padding: "2rem", 
      screens: { 
        "2xl": "1400px" 
      } 
    },
  },
  plugins: [],
  darkMode: ["class"],
}

export default config