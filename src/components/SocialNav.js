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
  @media screen and (min-width: 40em) {
    &:hover {
      color: ${t.colors.secondary};
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
        <IconLink href="https://twitter.com/JamChiller" aria-label="Twitter">
          <Icon name="twitter" />
        </IconLink>
      </Li>
      <Li ml={2}>
        <IconLink href="https://dribbble.com/jamchiller" aria-label="Dribbble">
          <Icon name="dribbble" />
        </IconLink>
      </Li>
      <Li ml={2}>
        <IconLink
          href="https://www.linkedin.com/in/jaredmichaelhill/"
          aria-label="Linked In"
        >
          <Icon name="linkedin" />
        </IconLink>
      </Li>
      <Li ml={2}>
        <IconLink href="https://medium.com/@jamchiller/" aria-label="Medium">
          <Icon name="medium" />
        </IconLink>
      </Li>
    </List>
  </Social>
);
