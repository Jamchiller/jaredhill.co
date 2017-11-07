import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import paths from './paths';

const Icon = styled.svg`
  width: ${p => p.size + 'rem' || p.width + 'rem'};
  height: ${p => p.size + 'rem' || p.height + 'rem'};
  ${p => p.direction && css`margin-${p.direction}: ${p.size / 2.5}rem`};
  vertical-align: middle;
  fill: currentColor;
  transition: color 0.2s, fill 0.2s;
`;

const social = ['twitter', 'dribbble', 'linkedin', 'medium'];

export default ({ className, size = 1, width, height, name, direction }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    size={size}
    width={width}
    height={height}
    viewBox={social.includes(name) ? '0 0 24 24' : '0 0 100 100'}
    direction={direction}
  >
    <path d={paths[name]} />
  </Icon>
);
