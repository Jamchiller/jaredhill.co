import styled from 'styled-components';
import { space } from 'styled-system';

export default styled.div`
  ${space};
  display: flex;
  align-items: center;
  flex: 1;
  max-width: ${p => (p.maxWidth ? p.maxWidth : '60rem')};
  margin-left: auto;
  margin-right: auto;
`;
