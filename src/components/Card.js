import styled from 'styled-components';
import { space, flexDirection } from 'styled-system';
import shadow from '../styles/shadow';

export default styled.div`
  ${space};
  ${flexDirection};
  position: relative;
  display: flex;
  background-color: ${p => p.theme.colors[p.background] || p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.grey[0]};
  border-radius: 6px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 40em) {
    border-radius: 10px;
  }
`;
