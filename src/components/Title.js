import React from 'react';
import styled from 'styled-components';
import { fontSize } from 'styled-system';
import shadow from '../styles/longShadow';

const Title = styled.h1`
  ${fontSize};
  font-size: ${p => (p.big ? p.theme.fontSizes[3] : p.theme.fontSizes[2])};
  color: orange;
  text-shadow: ${p => shadow(20)};
  @media (min-width: 40em) {
    font-size: ${p => (p.big ? p.theme.fontSizes[4] : p.theme.fontSizes[3])};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 40rem;
  min-height: ${p => (p.big ? '33vh' : 'auto')};
  margin-top: ${p => (p.big ? p.theme.space[2] : p.theme.space[3])};
  margin-bottom: ${p => (p.big ? p.theme.space[2] : p.theme.space[3])};
  @media screen and (min-width: 40em) {
    margin-top: ${p => (p.big ? p.theme.space[3] : p.theme.space[4])};
    margin-bottom: ${p => (p.big ? p.theme.space[3] : p.theme.space[4])};
  }
`;

export default ({ id, big, size, children }) => (
  <Wrapper id={id} big={big}>
    <Title fontSize={size} big={big}>
      {children}
    </Title>
  </Wrapper>
);
