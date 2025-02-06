import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: "2rem",
  		screens: {
  			"2xl": "1400px",
  		},
  	},
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-inter)'],
  			display: ['var(--font-poppins)'],
  		},
  		backgroundImage: {
  			'grid-pattern': 'linear-gradient(to right, rgb(0 0 0 / 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.02) 1px, transparent 1px)',
  			'grid-pattern-light': 'linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)',
  		},
  		backgroundSize: {
  			'grid': '40px 40px',
  		},
  		colors: {
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
  			"fade-in-up": {
  				from: {
  					opacity: "0",
  					transform: "translateY(20px)",
  				},
  				to: {
  					opacity: "1",
  					transform: "translateY(0)",
  				},
  			},
  			"fade-in-down": {
  				from: {
  					opacity: "0",
  					transform: "translateY(-20px)",
  				},
  				to: {
  					opacity: "1",
  					transform: "translateY(0)",
  				},
  			},
  			"fade-in-left": {
  				from: {
  					opacity: "0",
  					transform: "translateX(20px)",
  				},
  				to: {
  					opacity: "1",
  					transform: "translateX(0)",
  				},
  			},
  			"fade-in-right": {
  				from: {
  					opacity: "0",
  					transform: "translateX(-20px)",
  				},
  				to: {
  					opacity: "1",
  					transform: "translateX(0)",
  				},
  			},
  			"scale-in": {
  				from: {
  					opacity: "0",
  					transform: "scale(0.95)",
  				},
  				to: {
  					opacity: "1",
  					transform: "scale(1)",
  				},
  			},
  			blob: {
  				"0%": {
  					transform: "translate(0px, 0px) scale(1)",
  				},
  				"33%": {
  					transform: "translate(30px, -50px) scale(1.1)",
  				},
  				"66%": {
  					transform: "translate(-20px, 20px) scale(0.9)",
  				},
  				"100%": {
  					transform: "translate(0px, 0px) scale(1)",
  				},
  			},
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out",
  			"fade-in-up": "fade-in-up 0.7s ease-out forwards",
  			"fade-in-down": "fade-in-down 0.7s ease-out forwards",
  			"fade-in-left": "fade-in-left 0.7s ease-out forwards",
  			"fade-in-right": "fade-in-right 0.7s ease-out forwards",
  			"scale-in": "scale-in 0.5s ease-out forwards",
  			"blob": "blob 7s infinite",
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
