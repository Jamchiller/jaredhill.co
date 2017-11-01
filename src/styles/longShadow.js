import t from './theme';

export default (size, shade = 3) =>
  Array.from(
    { length: size },
    (x, i) => `${i / 2 + 0.5}px ${i / 2 + 0.5}px ${t.colors.grey[shade]}`
  ).join(', ');
