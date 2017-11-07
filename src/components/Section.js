import React from 'react';
import styled, { css } from 'styled-components';
import Title from './Title';
import { serif, sans } from '../styles/utils';
import t from '../styles/theme';

export const Section = styled.section`text-align: center;`;

export const Container = styled.div`
  margin-top: ${t.space[4]};
  margin-left: auto;
  margin-right: auto;
  padding: ${t.space[3]} ${t.space[2]};
  color: ${t.colors.textDark};
  background-color: ${t.colors.bg};
  box-shadow: -12px 12px 0 rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 40em) {
    padding-top: ${t.space[4]};
    padding-bottom: ${t.space[4]};
    padding-left: ${t.space[4]};
    padding-right: ${t.space[4]};
    box-shadow: -20px 20px 0 rgba(0, 0, 0, 0.12);
  }
  @media screen and (min-width: 60em) {
    margin-top: ${t.space[5]};
  }
`;

export const Content = styled.div`
  max-width: 58rem;
  margin-left: auto;
  margin-right: auto;
  ${serif};
  text-align: left;
  & > * + * {
    ${'' /* margin-top: ${t.space[2]}; */} margin-top: 1.5em;
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
  & > img {
    float: right;
    margin-left: ${t.space[2]};
    width: 40%;
  }
  & ul {
    list-style: initial;
    padding-left: 1em;
  }
  & blockquote {
    & > * + * {
      margin-top: 0.75em;
    }
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
