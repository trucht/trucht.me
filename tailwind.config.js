/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      wave: {
        '0%, 100%': {
          transform: 'translateY(0)',
        },
        '50%': {
          transform: 'translateY(20px)',
        },
      },
      shadow: {
        '0%, 100%': {
          transform: 'scale(1, 1)',
        },
        '50%': {
          transform: 'scale(.65, .65)',
        },
      },
      rotate: {
        '0%, 100%': {
          transform: 'rotate(90deg)',
        },
        '50%': {
          transform: 'rotate(-90deg)',
        },
      }
    },
    animation: {
      'wave-1': 'wave 2s ease-in-out infinite',
      'wave-2': 'wave 4s ease-in-out infinite',
      'shadow': 'shadow 4s ease-in-out infinite',
      'rotate': 'rotate 20s ease-in-out infinite',
    }
  },
  plugins: [
  ],
}
