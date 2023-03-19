import { Roboto, Noto_Sans_JP } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { palette } from '@mui/system';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const notoSansJp = Noto_Sans_JP({
  preload: false,
  weight: ['300', '400', '500', '700'],
  // subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#673AB7',
      dark: '#512DA8',
      light: '#D1C4E9',
    },
    secondary: {
      main: '#CDDC39',
      dark: '#AFB42B',
      light: '#F0F4C3',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    background: {
      default: '#F9FAFB',
    },
    divider: '#BDBDBD',
  },
  typography: {
    fontFamily: notoSansJp.style.fontFamily,
    h3: { fontWeight: 500 },
    h6: { fontSize: '1rem', fontWeight: 500 },
    subtitle1: { fontWeight: 500 },
  },
});

export default theme;
