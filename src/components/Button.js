import styled from 'styled-components';
import { space, width } from 'styled-system';
import Link from 'gatsby-link';
import shadow from '../styles/shadow';
import t from '../styles/theme';

export const Button = styled.button`
  ${space};
  ${width};
  display: inline-block;
  position: relative;
  padding: ${t.space[2]} ${t.space[3]};
  font-family: 'Cabin', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  line-height: 1;
  text-decoration: none;
  background-color: ${t.colors.secondary};
  color: ${t.colors.textLight};
  border-radius: 3rem;
  box-shadow: -8px 8px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    outline: none;
    background-color: ${t.colors.primary};
    transform: translateY(-1px);
    box-shadow: -9px 10px 0 rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    opacity: 0.6;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  @media screen and (min-width: 40em) {
    padding: ${t.space[2]} ${t.space[3]};
  }
`;

export const LinkButton = Button.withComponent(Link);

export const ExternalLinkButton = Button.withComponent('a');
