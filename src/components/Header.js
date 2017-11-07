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
  height: 2rem;
  &:hover {
    animation: ${tada} 0.5s both;
  }
`;

const Logo = styled.svg`width: 2rem;`;

export default ({ current }) => {
  return (
    <Wrapper>
      <LogoLink to="/" aria-label="Home">
        <Logo viewBox="0 0 4 4" fill="#fff">
          <rect x="0" y="0" width="3" height="1" />
          <rect x="1" y="0" width="1" height="4" />
          <rect x="0" y="3" width="2" height="1" />
          <rect x="3" y="3" width="1" height="1" />
        </Logo>
      </LogoLink>
      <Nav current={current} />
      <SocialNav />
    </Wrapper>
  );
};
