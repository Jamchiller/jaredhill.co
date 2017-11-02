import React from 'react';
import styled, { css } from 'styled-components';
import t from '../styles/theme';

export const Footer = styled.footer`
  padding: ${t.space[4]} ${t.space[2]};
  padding-bottom: 7.25rem;
  text-align: center;
  color: ${t.colors.textLight};
  background-color: ${t.colors.secondary};
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 40em) {
    padding-bottom: ${t.space[4]};
  }
`;

export const FooterContent = styled.div`
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
  & > * + * {
    margin-top: ${t.space[2]};
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
