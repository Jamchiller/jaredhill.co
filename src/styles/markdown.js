import { css } from 'styled-components';
import t from './theme';

export default css`
  & > * + * {
    margin-top: 1em;
  }
  & h2,
  & h3,
  & h4,
  & h5 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
  & blockquote {
    font-style: italic;
    padding-left: ${p => p.theme.space[2]};
    border-left: 0.5em solid ${p => p.theme.colors.primary};
  }
  & cite {
    font-style: normal;
    font-size: 0.85em;
  }
  & abbr {
    font-variant-caps: all-small-caps;
    text-decoration: none;
    &[title] {
      cursor: help;
      text-decoration: dotted underline;
    }
  }
  & ul,
  & ol {
    padding-left: 1em;
  }
`;
