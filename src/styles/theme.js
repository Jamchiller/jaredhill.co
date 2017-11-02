import { hsl } from 'polished';

// const shades = Array.from({ length: 5 }, (shade, i) =>
//   hsl(30, 0.05, 0.95 - i * 20 / 100)
// );

const shades = [
  hsl(30, 0.05, 0.95),
  hsl(30, 0.05, 0.8),
  hsl(30, 0.05, 0.6),
  hsl(30, 0.05, 0.4),
  hsl(30, 0.05, 0.2),
];

const palette = {
  pink: '#ff0090',
  purple: '#4000f1',
  plum: '#95587b',
  black: '#282828',
  coral: '#ff4e48',
  magenta: '#cb009a',
  aqua: '#1ebbe3',
  yellow: '#f5ff00',
  white: '#ffffff',
};

export default {
  breakpoints: [40, 60, 70],
  space: [0, '0.5rem', '1rem', '2rem', '4rem', '8rem'],
  colors: {
    grey: shades,
    primary: palette.pink,
    secondary: palette.coral,
    tertiary: palette.purple,
    bg: palette.white,
    textLight: palette.white,
    textDark: palette.black,
  },
  fontSizes: ['0.8125rem', '1rem', '2rem', '3rem', '4rem'],
};
