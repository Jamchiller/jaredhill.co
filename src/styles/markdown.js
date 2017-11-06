import { css } from 'styled-components';
import { sans, serif } from './utils';
import t from './theme';

export default css`
  ${serif};
  & > * + * {
    margin-top: 1em;
  }
  & h2,
  & h3,
  & h4,
  & h5 {
    ${sans};
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
