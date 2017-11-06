import React from 'react';
import styled, { css } from 'styled-components';
import Title from './Title';
import { serif, sans } from '../styles/utils';
import t from '../styles/theme';

export const Section = styled.section`text-align: center;`;

export const Container = styled.div`
  margin-top: ${t.space[3]};
  margin-left: auto;
  margin-right: auto;
  padding: ${t.space[3]} ${t.space[2]};
  color: ${t.colors.textDark};
  background-color: ${t.colors.bg};
  box-shadow: -12px 12px 0 rgba(0, 0, 0, 0.12);
  @media (min-width: 40em) {
    margin-top: ${t.space[4]};
    padding-top: ${t.space[4]};
    padding-bottom: ${t.space[4]};
    padding-left: ${t.space[3]};
    padding-right: ${t.space[3]};
    box-shadow: -20px 20px 0 rgba(0, 0, 0, 0.12);
  }
`;

export const Content = styled.div`
  max-width: 44rem;
  margin-left: auto;
  margin-right: auto;
  ${serif};
  text-align: left;
  & > * + * {
    margin-top: 1em;
  }
  & > h1,
  h2,
  h3,
  h4 {
    ${sans};
  }
  & > p:first-child {
    font-size: 125%;
  }
`;

export default ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Section>
);
