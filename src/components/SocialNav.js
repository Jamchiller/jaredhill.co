import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import Icon from './Icon';
import t from '../styles/theme';

const Social = styled.nav`${space};`;

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
      color: ${t.colors.primary};
    }
  }
  @media screen and (max-width: 40em) and (hover: hover) {
    &:hover {
      color: ${t.colors.primary};
    }
  }
`;

export default () => (
  <Social ml={'auto'}>
    <List>
      <Li ml={2}>
        <IconLink href="https://twitter.com/_oliverjam" aria-label="Twitter">
          <Icon name="twitter" fill />
        </IconLink>
      </Li>
      <Li ml={2}>
        <IconLink href="https://github.com/oliverjam" aria-label="Github">
          <Icon name="github" fill />
        </IconLink>
      </Li>
      <Li ml={2}>
        <IconLink href="https://linkedin.com/oliverjam" aria-label="Codepen">
          <Icon name="codepen" />
        </IconLink>
      </Li>
    </List>
  </Social>
);
