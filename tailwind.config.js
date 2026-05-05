/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background:   "hsl(var(--background) / <alpha-value>)",
        foreground:   "hsl(var(--foreground) / <alpha-value>)",
        primary:      "hsl(var(--primary) / <alpha-value>)",
        "primary-fg": "hsl(var(--primary-foreground) / <alpha-value>)",
        muted:        "hsl(var(--muted) / <alpha-value>)",
        "muted-fg":   "hsl(var(--muted-foreground) / <alpha-value>)",
        border:       "hsl(var(--border) / <alpha-value>)",
        ochre:        "hsl(var(--ochre) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "Impact", "'Arial Narrow'", "sans-serif"],
        body:    ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee":     "marquee 28s linear infinite",
        "marquee-rev": "marquee-rev 32s linear infinite",
      },
      keyframes: {
        marquee:       { from: { transform: "translateX(0)" },    to: { transform: "translateX(-50%)" } },
        "marquee-rev": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" }   },
      },
    },
  },
  plugins: [],
};

