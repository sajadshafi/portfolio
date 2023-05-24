import localFont from 'next/font/local';

const Poppins = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins/Poppins-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  fallback: ['Helvatica', 'Verdana'],
  variable: '--font-poppins',
});

const Montserrat = localFont({
  src: '../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf',
  fallback: ['Helvatica', 'Verdana'],
  variable: '--font-montserrat',
});

const fonts = {
  poppins: Poppins,
  montserrat: Montserrat,
};

export default fonts;
