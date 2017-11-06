import React from 'react';
import styled, { css } from 'styled-components';
import { textShadow } from '../styles/utils';
import { serif, sans } from '../styles/utils';
import t from '../styles/theme';

export const Footer = styled.footer`
  padding: ${t.space[4]} ${t.space[2]};
  padding-bottom: 7.25rem;
  text-align: center;
  color: ${t.colors.textLight};
  background-color: ${t.colors.secondary};
  ${textShadow(1)};
  @media screen and (min-width: 40em) {
    padding-bottom: ${t.space[4]};
  }
`;

export const FooterContent = styled.div`
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
  ${serif};
  & > * + * {
    margin-top: ${t.space[2]};
  }
  & > h1,
  h2,
  h3,
  h4 {
    ${sans};
  }
`;

const dot = css`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: currentColor;
`;

export const Divider = styled.hr`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: none;
  color: inherit;
  ${dot};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    ${dot};
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    ${dot};
  }
`;
