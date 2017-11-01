import styled from 'styled-components';
import { space } from 'styled-system';

export default styled.div`
  ${space};
  max-width: ${p => (p.maxWidth ? p.maxWidth : '60rem')};
  margin-left: auto;
  margin-right: auto;
`;
