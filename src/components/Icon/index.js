import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import paths from './paths';

const Icon = styled.svg`
  width: ${p => p.size + 'rem' || p.width + 'rem'};
  height: ${p => p.size + 'rem' || p.height + 'rem'};
  ${p => p.direction && css`margin-${p.direction}: ${p.size / 2.5}rem`};
  vertical-align: middle;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
  transition: color 0.2s, fill 0.2s;
`;

export default ({
  className,
  size = 1.5,
  width,
  height,
  name,
  fill,
  direction,
}) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    size={size}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill={fill ? 'currentcolor' : 'none'}
    stroke={!fill ? 'currentcolor' : 'none'}
    direction={direction}
  >
    <path d={paths[name]} />
  </Icon>
);
