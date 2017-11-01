import styled from 'styled-components';
import { space, width } from 'styled-system';
import shadow from '../styles/shadow';

export default styled.button`
  ${space};
  ${width};
  position: relative;
  font-weight: 600;
  background-color: ${p => p.theme.colors.grey[2]};
  color: ${p => p.theme.colors.textLight};
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
  transition: background-color 0.2s, color 0.2s;
  @media screen and (min-width: 40em) {
    border-radius: 4px;
  }
  &:hover {
    color: ${p => p.theme.colors.textDark};
    background-color: ${p => p.theme.colors.primary};
  }
  &:focus {
    outline: none;
    ${shadow(1)};
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;
