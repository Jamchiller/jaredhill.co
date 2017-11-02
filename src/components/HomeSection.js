import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import Link from 'gatsby-link';
import Title from './Title';
import { P } from './Blocks';
import { LinkButton } from './Button';
import t from '../styles/theme';

const Section = styled.section`
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  color: ${t.colors.textLight};
  text-align: center;
  & > * + * {
    margin-top: ${t.space[3]};
  }
`;

const HomeSection = ({ label, title, direction, posts }) => (
  <Section>
    <Title big>I'm a UX Designer operating out of London, UK.</Title>
    <p>I'm a UX Designer operating out of London, UK.</p>
    <LinkButton>Let's check out this portfolio then >></LinkButton>
  </Section>
);

export default HomeSection;
