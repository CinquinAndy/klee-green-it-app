module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'playfair': "chennai,sans-serif",
        'hero': "hero-new,sans-serif",
      },
      spacing: {
        "100px":"100px",
        "140px":"140px",
        "300px":"300px"
      },
      fontSize: {
        '10px': "10px",
        '11px': "11px",
        '12px': "12px",
        '14px': "14px",
        '16px': "16px",
        '18px': "18px",
        '20px': "20px",
        '24px': "24px",
        '30px': "30px",
        '36px': "36px",
        '48px': "48px",
        '60px': "60px",
        '72px': "72px",
      },
      colors: {
        klee_purple: {
          500: "#534991",
        },
        klee_yellow: {
          500: "#FEC931",
        },
        klee_gray: {
          50: "#e8e8e9",
          100: "#cfced0",
          200: "#b6b4b7",
          300: "#9d9a9e",
          400: "#848085",
          500: "#6a666b",
          600: "#504d51",
          700: "#363437",
          800: "#1c1b1d",
          900: "#080708",
        }
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
