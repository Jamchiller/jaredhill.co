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
  orange: 'orange',
  white: hsl(30, 0.05, 0.98),
};

export default {
  breakpoints: [40, 60, 70],
  space: [0, '0.5rem', '1rem', '2rem', '4rem', '8rem'],
  colors: {
    grey: shades,
    primary: palette.orange,
    bg: palette.white,
    textLight: palette.white,
    textDark: shades[4],
  },
  fontSizes: ['0.8125rem', '1rem', '2rem', '3rem', '4rem'],
};
