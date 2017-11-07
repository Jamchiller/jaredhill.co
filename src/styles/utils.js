import { css } from 'styled-components';

import t from './theme';

export const title = css`
  display: inline;
  padding: 8px;
  font-weight: 600;
  line-height: 1.8;
  color: ${t.colors.textLight};
  background-color: ${t.colors.primary};
  box-shadow: -12px 12px 0 rgba(0, 0, 0, 0.12);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  @media screen and (min-width: 40em) {
    line-height: 1.75;
  }
`;

export const serif = css`font-family: Georgia, georgia, serif;`;
export const sans = css`
  font-family: 'Cabin', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
`;

export const textShadow = size =>
  css`
    text-shadow: 0 ${size}px ${size}px rgba(0, 0, 0, 0.5);
  `;
