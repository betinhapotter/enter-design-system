// Alternativa Tailwind v3 (o projeto usa v4 @theme por padrão em styles/app.css)
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,vue,html}', './stories/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: {
      background: 'var(--background)', foreground: 'var(--foreground)',
      card: { DEFAULT: 'var(--card)', foreground: 'var(--card-foreground)' },
      primary: { DEFAULT: 'var(--primary)', foreground: 'var(--primary-foreground)' },
      brand: { DEFAULT: '#fb88ad', active: 'var(--brand-active-bg)' },
	  secondary: { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
      muted: { DEFAULT: 'var(--muted)', foreground: 'var(--muted-foreground)' },
      destructive: { DEFAULT: 'var(--destructive)', foreground: 'var(--destructive-foreground)' },
      border: 'var(--border)', input: 'var(--input)', ring: 'var(--ring)', fill: 'var(--fill)',
    },
    borderRadius: { sm: 'calc(var(--radius) - 4px)', md: 'calc(var(--radius) - 2px)', lg: 'var(--radius)', xl: 'calc(var(--radius) + 4px)' },
    fontFamily: { sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};
