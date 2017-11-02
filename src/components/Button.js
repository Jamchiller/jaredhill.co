import styled from 'styled-components';
import { space, width } from 'styled-system';
import shadow from '../styles/shadow';
import t from '../styles/theme';

export const Button = styled.button`
  ${space};
  ${width};
  display: inline-block;
  position: relative;
  padding: ${t.space[2]} ${t.space[4]};
  font-family: 'Cabin', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  line-height: 1;
  text-decoration: none;
  background-color: ${t.colors.secondary};
  color: ${t.colors.textLight};
  border-radius: 3rem;
  box-shadow: -8px 8px 0 rgba(0, 0, 0, 0.12);
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: ${t.colors.primary};
  }
  &:focus {
    outline: none;
    ${shadow(1)};
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;

export const LinkButton = Button.withComponent('a');
