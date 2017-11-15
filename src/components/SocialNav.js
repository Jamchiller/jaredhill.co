import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import Icon from './Icon';
import t from '../styles/theme';

const Social = styled.nav`
  ${space};
  color: ${t.colors.textLight};
`;

const List = styled.ul`
  ${space};
  display: flex;
  flex: 1;
`;

const Li = styled.li`
  ${space};
  flex: 1;
`;

const IconLink = styled.a`
  display: block;
  transition: transform 0.2s ease-out;
  @media screen and (min-width: 40em) {
    &:hover {
      transform: scale(1.3);
    }
  }
  @media screen and (max-width: 40em) and (hover: hover) {
    &:hover {
      color: ${t.colors.secondary};
    }
  }
`;

export default () => (
  <Social ml={'auto'}>
    <List>
      <Li ml={2}>
        <IconLink
          href="https://twitter.com/JamChiller"
          aria-label="Twitter"
          target="_blank"
          rel="noopener"
        >
          <Icon name="twitter" />
        </IconLink>
      </Li>
      <Li ml={2}>
        <IconLink
          href="https://dribbble.com/jamchiller"
          aria-label="Dribbble"
          target="_blank"
          rel="noopener"
        >
          <Icon name="dribbble" />
        </IconLink>
      </Li>
      <Li ml={2}>
        <IconLink
          href="https://www.linkedin.com/in/jaredmichaelhill/"
          aria-label="Linked In"
          target="_blank"
          rel="noopener"
        >
          <Icon name="linkedin" />
        </IconLink>
      </Li>
      <Li ml={2}>
        <IconLink
          href="https://medium.com/@jamchiller/"
          aria-label="Medium"
          target="_blank"
          rel="noopener"
        >
          <Icon name="medium" />
        </IconLink>
      </Li>
    </List>
  </Social>
);
