import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "slick-carousel/slick/slick.css";
import "./assets/sass/style.scss";
import Preloader from './Components/Misc/Preloader';
import LenisScrollClient from './Components/LenisScroll';

const poppinsBlack = localFont({
  src: './assets/fonts/Poppins-Black.ttf',
  variable: '--font-poppins-black',
});

const poppinsBold = localFont({
  src: './assets/fonts/Poppins-Bold.ttf',
  variable: '--font-poppins-bold',
});

const poppinsExtraBold = localFont({
  src: './assets/fonts/Poppins-ExtraBold.ttf',
  variable: '--font-poppins-extra-bold',
});

const poppinsExtraLight = localFont({
  src: './assets/fonts/Poppins-ExtraLight.ttf',
  variable: '--font-poppins-extra-light',
});

const poppinsLight = localFont({
  src: './assets/fonts/Poppins-Light.ttf',
  variable: '--font-poppins-light',
});

const poppinsMedium = localFont({
  src: './assets/fonts/Poppins-Medium.ttf',
  variable: '--font-poppins-medium',
});

const poppinsRegular = localFont({
  src: './assets/fonts/Poppins-Regular.ttf',
  variable: '--font-poppins-regular',
});

const poppinsSemiBold = localFont({
  src: './assets/fonts/Poppins-SemiBold.ttf',
  variable: '--font-poppins-semi-bold',
});

const poppinsThin = localFont({
  src: './assets/fonts/Poppins-Thin.ttf',
  variable: '--font-poppins-thin',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'SnK – Agency & Studio',
    template: '%s | SnK – Agency & Studio',
  },
  description: 'SnK – Agency & Studio',
  openGraph: {
    title: 'SnK – Agency & Studio',
    description: 'SnK – Agency & Studio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Gfxpartner" />
        <link rel="icon" href="slope-favicon.ico" />
      </head>
      <body
        className={`${poppinsBlack.variable} ${poppinsBold.variable} ${poppinsExtraBold.variable} ${poppinsExtraLight.variable} ${poppinsLight.variable} ${poppinsMedium.variable} ${poppinsRegular.variable} ${poppinsSemiBold.variable} ${poppinsThin.variable}`}
      >
        <Preloader />
        <LenisScrollClient />
        {children}
      </body>
    </html>
  );
}