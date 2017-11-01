import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import Link from 'gatsby-link';
import Nav from './Nav';
import SocialNav from './SocialNav';
import Icon from './Icon';
import t from '../styles/theme';
import { tada } from '../styles/animation';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  position: relative;
  &:hover {
    animation: ${tada} 0.5s both;
    &::after {
      opacity: 1;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.2s 0.1s ease-out;
    z-index: -10;
  }
`;

const Logo = styled.svg`
  width: 2rem;
  height: 2rem;
  stroke: currentcolor;
`;

export default ({ current }) => {
  return (
    <Wrapper>
      <LogoLink to="/">
        <Logo
          viewBox="0 0 32 32"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="white"
        >
          <path
            d="M4 2 v24 a3,1 0 0 0 24,0 v-24 z"
            strokeWidth="2"
            fill={t.colors.primary}
          />
          <path d="M4 6 a1,1 0 1 0 8,0 a1,1 0 1 0 8,0 a1,1 0 1 0 8,0" />
          <path d="M3 2 h26 v3 h-26 z" fill="currentcolor" />
          <path d="M10 14 v8 a3,1 0 0 0 12,0 v-8 a8,1 0 0 1 -12,0" />
          {/* <circle cx="16" cy="19" r="5" /> */}
        </Logo>
      </LogoLink>
      <Nav current={current} />
      <SocialNav />
    </Wrapper>
  );
};
