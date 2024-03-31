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
      colors: {
        'primary': 'var(--color-primary)',
        neutral: {
          '100': 'var(--color-neutral-100)',
          '200': 'var(--color-neutral-200)',
          '300': 'var(--color-neutral-300)',
          '500': 'var(--color-neutral-500)',
          '800': 'var(--color-neutral-800)',
        },
        white: 'var(--color-white)',
        error: {
          '500': 'var(--color-error-500)',
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
  },
  plugins: [
  ],
}
