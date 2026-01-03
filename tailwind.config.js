/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Dark indigo/purple background (n8n-inspired)
        'forge-dark': '#0B0614',
        'forge-darker': '#120A24',
        'forge-navy': '#1E1B3A',
        // Gray scale for UI
        'forge-gray': {
          50: '#E5E7EB',
          100: '#D1D5DB',
          200: '#9CA3AF',
          300: '#6B7280',
          400: '#4B5563',
          500: '#374151',
          600: '#1F2937',
          700: '#18122B',
          800: '#1F1B3A',
          900: '#0B0614',
        },
        // Slate for text elements
        'forge-slate': {
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#2D2654',
          800: '#18122B',
        },
        // Indigo accent (n8n-inspired)
        'forge-accent': '#4F46E5',
        'forge-accent-dark': '#4338CA',
        'forge-accent-light': '#6366F1',
        // Orange highlight accent (use sparingly)
        'forge-highlight': '#F97316',
        // Legacy support
        'forge-steel': '#6B7280',
        'forge-silver': '#9CA3AF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
