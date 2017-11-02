import React from 'react';
import styled from 'styled-components';
import { fontSize } from 'styled-system';
import titleEffect from '../styles/title';

export default styled.h1`
  margin-bottom: ${p => p.theme.space[2]};
  font-size: ${p => (p.big ? p.theme.fontSizes[2] : p.theme.fontSizes[1])};
  ${titleEffect};
  @media screen and (min-width: 40em) {
    font-size: ${p => (p.big ? p.theme.fontSizes[3] : p.theme.fontSizes[2])};
  }
`;
