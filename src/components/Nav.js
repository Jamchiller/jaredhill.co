import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import Link from 'gatsby-link';
import Icon from './Icon';
import t from '../styles/theme';

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3.25rem;
  display: flex;
  background-color: ${t.colors.grey[0]};
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.15);
  z-index: 999;
  @media (min-width: 40em) {
    position: initial;
    margin-left: 1.5rem;
    height: auto;
    border: none;
    box-shadow: none;
    background-color: transparent;
  }
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

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: ${t.fontSizes[0]};
  text-transform: capitalize;
  text-decoration: none;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  transition: border-color 0.2s;
  @media (min-width: 40em) {
    border-bottom: 4px solid transparent;
    ${p => p.current && css`border-bottom-color: ${t.colors.grey[3]};`};
    &:hover {
      color: inherit;
      border-bottom-color: ${t.colors.primary};
    }
  }
  @media (max-width: 40em) and (hover: hover) {
    &:hover {
      color: inherit;
      ${p => !p.current && css`border-bottom-color: ${t.colors.primary};`};
    }
  }
  @media (max-width: 40em) {
    ${p => p.current && css`border-bottom-color: ${t.colors.grey[1]};`};
  }
`;

const NavIcon = styled(Icon).attrs({
  size: 1,
})`
  @media (min-width: 40em) {
    display: none;
  }
`;

const navLinks = current => {
  const pages = [
    {
      path: '/about',
      icon: 'person',
    },
    {
      path: '/blog',
      icon: 'book',
    },
    {
      path: '/contact',
      icon: 'phone',
    },
  ];
  return pages.map((page, i) => (
    <Li key={i} mr={[0, 2, 3]}>
      <NavLink to={page.path} current={page.path === current}>
        <NavIcon name={page.icon} />
        <span>{page.path.replace('/', '')}</span>
      </NavLink>
    </Li>
  ));
};

export default ({ current }) => (
  <Nav>
    <List>{navLinks(current)}</List>
  </Nav>
);
