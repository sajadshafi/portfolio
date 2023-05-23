/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // Main Colors
      colorPrimary: '#ff014f',
      colorSecondary: '#f4f5f6',
      colorTertiary: '#0d1013',
      colorGray: '#f6f6f6',
      colorSubtitle: '#f9004d',

      // Typo Colors
      colorHeadingwv: '#1e2125',
      colorBody: '#878e99',
      colorBodyWhite: '#3c3e41',
      colorLightn: '#c4cfde',

      // Gery Colors
      colorMidgray: '#878787',
      colorLight: '#e4e6ea',
      colorLighter: '#ced0d4',
      colorLightest: '#f0f2f5',
      colorBorder: '#e6e6e6',
      colorWhite: '#ffffff',
      colorWhite75: 'rgba(255, 255, 255, 0.75)',

      // Background Color
      backgroundColor1: '#ECF0F3',
      backgroundColor2: '#212428',

      // notify Colors
      colorSuccess: '#3eb75e',
      colorDanger: '#ff0003',
      colorWarning: '#ff8f3c',
      colorInfo: '#1ba2db',

      // Social icon colors
      colorFacebook: '#3b5997',
      colorTwitter: '#1ba1f2',
      colorYoutube: '#ed4141',
      colorLinkedin: '#0077b5',
      colorPinterest: '#e60022',
      colorInstagram: '#c231a1',
      colorVimeo: '#00adef',
      colorWwitch: '#6441a3',
      colorDiscord: '#7289da',
    },
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(145deg, #1e2024, #23272b)',
      },
      boxShadow: {
        shadow1: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
      fontFamily: {
        // Font Family
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        // Fonts Size
        fontSizeb1: '18px',
        fontSizeb2: '22px',
        fontSizeb3: '14px',

        // Heading Font
        h1: '70px',
        h2: '60px',
        h3: '50px',
        h4: '40px',
        h5: '30px',
        h6: '20px',
      },

      lineHeight: {
        // Line Height
        lineHeightb1: '1.50',
        lineHeightb2: '1.6',
        lineHeightb3: '1.7',
      },
      borderRadius: {
        primary: '6px',
      },
      transitionDuration: {
        '400ms': '0.4s',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-60%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 800ms ease-in-out',
      },
    },
  },
  plugins: [],
};
