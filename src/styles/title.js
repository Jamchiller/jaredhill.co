import { css } from 'styled-components';

import t from './theme';

export default css`
  display: inline;
  padding: 6px;
  font-weight: 600;
  line-height: 1.8;
  letter-spacing: 1px;
  color: ${t.colors.textLight};
  background-color: ${t.colors.primary};
  box-shadow: -12px 12px 0 rgba(0, 0, 0, 0.12);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  box-decoration-break: clone;
  @media screen and (min-width: 40em) {
    line-height: 1.55;
  }
`;
