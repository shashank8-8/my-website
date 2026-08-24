/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070a0f',
          900: '#0b0f17',
          850: '#111724',
          800: '#182030',
          700: '#232d42',
        },
        brand: {
          blue: '#38bdf8',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'key-press': 'keyPress 0.2s ease-in-out',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        keyPress: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(3px) scale(0.96)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'key-3d': '0 6px 0 #1e293b, 0 10px 15px -3px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
        'key-3d-active': '0 2px 0 #1e293b, 0 4px 6px -1px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
        'glass-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 20px rgba(99, 102, 241, 0.15)',
        'paper': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.07)',
      }
    },
  },
  plugins: [],
}
