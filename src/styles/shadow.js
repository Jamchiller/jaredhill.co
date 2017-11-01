import { css } from 'styled-components';

export default (size, shade = 3) => css`
  box-shadow: ${size / 4}rem ${size / 4}rem 0 ${p => p.theme.colors.grey[shade]};
`;
