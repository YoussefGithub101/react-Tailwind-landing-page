import flowbite from 'flowbite-react/tailwind';
import fluid, { extract , screens, fontSize} from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    extract
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter:['Inter',"sans-serif"]
      },
      colors:{
        'body_bg':'rgba(var(--body_bg))',
        'Primary_color': 'rgba(var(--Primary_color))',
        'Secondary': 'rgba(var(--Secondary))',
        'info': 'rgba(var(--info))',
        'hover_color':'',
        'Brand-Primary':'rgba(var(--Brand-Primary))',
        'Neutral-D_Grey':'rgba(var(--Neutral-D_Grey))',
        'Text-Gray-900':'rgba(var(--Text-Gray-900))',
        'Neutral-Silver':'rgba(var(--Neutral-Silver))',
        'Neutral-L_Grey':'rgba(var(--Neutral-L_Grey))',
        'Neutral-Grey':'rgba(var(--Neutral-Grey))',
        'Neutral-Black':'rgba(var(--Neutral-Black))',
        'Tint-T5':'rgba(var(--Tint-T5))',
        'Neutral-White':'rgba(var(--Neutral-White))'
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '4rem',
        '5xl': '4.5rem',
      },
      keyframes: {
        iconMarquee: {
          '0%': { left: '0' },
          '100%': { left: '-100%' },
        }
      },
      boxShadow: {
        '2xl': '0px 8px 16px 0px rgba(var(--shadow-color))',
      }
    },
    screens,
    fontSize,
  },
  plugins: [ 
    flowbite.plugin(),
    fluid
  ],
}

