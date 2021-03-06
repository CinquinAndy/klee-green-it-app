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
        'montserrat': 'Montserrat, sans-serif',
        'playfair': 'Playfair Display, serif'
      },
      spacing: {
        "10px": "10px",
        "30px": "30px",
        "50px": "50px",
        "60px": "60px",
        "100px": "100px",
        "140px": "140px",
        "160px": "160px",
        "200px": "200px",
        "250px": "250px",
        "280px": "280px",
        "300px": "300px",
        "350px": "350px",
        "50vh": "50vh",
        "60vh": "60vh",
        "75vh": "75vh",
        "98vh": "98vh",
        "100vw": "100vw",
        "100vh": "100vh",
        "500px": "500px"
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
      scale: {
        "flip": "-1"
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
      },
      animation: {
        'spin-slow':'spin 1s linear infinite reverse'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
