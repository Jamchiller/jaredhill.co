import { css } from 'styled-components';

import t from './theme';

export const title = css`
  display: inline;
  padding: 6px;
  font-weight: 600;
  line-height: 1.8;
  color: ${t.colors.textLight};
  background-color: ${t.colors.primary};
  box-shadow: -12px 12px 0 rgba(0, 0, 0, 0.12);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  box-decoration-break: clone;
  @media screen and (min-width: 40em) {
    line-height: 1.55;
  }
`;

export const serif = css`font-family: 'Adamina', georgia, serif;`;
export const sans = css`
  font-family: 'Cabin', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
`;
