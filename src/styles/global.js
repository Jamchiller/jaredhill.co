import { injectGlobal } from 'styled-components';
import t from './theme';
import { sans, serif } from './utils';

injectGlobal`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  @media (min-width: 40em) {
    html {
      font-size: 112.5%;
    }
  }

  body {
    ${sans};
    letter-spacing: 1px;
    line-height: 1.5;
    color: ${t.colors.textDark};
    background: linear-gradient(${t.colors.primary}, ${t.colors
  .tertiary} 750px);
  }

  p {
    ${serif};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.1;
  }

  a {
    color: inherit;
    text-decoration-skip: ink;
    text-decoration-line: underline;
    transition: text-decoration-color 0.1s;
    &:hover {
      text-decoration-color: ${t.colors.primary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  label,
  input,
  textarea,
  button {
    display: block;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    background: none;
    border: none;
  }
`;
