/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: {
          DEFAULT: '#F9F8F6',
          50: '#FFFFFF',
          100: '#F9F8F6',
          200: '#F2F0EB',
          300: '#E7E4DC',
        },
        stone: {
          surface: '#F2F0EB',
          light: '#E8E5DD',
          border: 'rgba(24, 24, 27, 0.08)',
        },
        carbon: {
          DEFAULT: '#18181B',
          900: '#111113',
          800: '#18181B',
          700: '#27272A',
        },
        slate: {
          muted: '#71717A',
          subtle: '#A1A1AA',
        },
        terracotta: {
          DEFAULT: '#C26D53',
          soft: '#E8A38E',
          dark: '#9E4E37',
        },
        sage: {
          DEFAULT: '#4A5849',
          soft: '#869685',
          dark: '#354034',
        },
        aegean: {
          DEFAULT: '#3E525E',
          soft: '#6E8594',
          dark: '#283842',
        },
        ochre: {
          DEFAULT: '#B5884B',
          soft: '#DFCAA5',
          dark: '#8A622E',
        },
        plum: {
          DEFAULT: '#5E434D',
          soft: '#987A84',
          dark: '#422D34',
        },
        umber: {
          DEFAULT: '#382C26',
          soft: '#6E594F',
          dark: '#241B17',
        },
      },
      fontFamily: {
        serif: ['"Newsreader"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        editorial: '-0.02em',
        telemetry: '0.08em',
      },
      boxShadow: {
        'subtle-ambient': '0 2px 8px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)',
        'elevated': '0 12px 32px -4px rgba(24,24,27,0.06), 0 4px 12px -2px rgba(24,24,27,0.03)',
        'modal': '0 24px 64px -12px rgba(24,24,27,0.12), 0 8px 24px -4px rgba(24,24,27,0.06)',
      },
    },
  },
  plugins: [],
}
