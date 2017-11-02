import styled from 'styled-components';
import { space, width } from 'styled-system';
import shadow from '../styles/shadow';
import t from '../styles/theme';

export const Button = styled.button`
  ${space};
  ${width};
  display: inline-block;
  position: relative;
  padding: ${t.space[1]} ${t.space[3]};
  line-height: 1;
  text-decoration: none;
  background-color: ${t.colors.secondary};
  color: ${t.colors.textLight};
  border-radius: 3rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
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
