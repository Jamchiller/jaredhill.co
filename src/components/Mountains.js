import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import t from '../styles/theme';

const Wrapper = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

const Mountain = styled.polygon`fill: ${p => p.theme.colors.grey[p.shade]};`;

const Mountains = () => (
  <Wrapper viewBox="0 0 100 100" preserveAspectRatio="xMaxYMin slice">
    <Mountain points="85 20 100 38 100 100 0 100 0 85" shade={2} />
    <Mountain points="65 15 100 55 100 100 0 100 0 65" shade={1} />
  </Wrapper>
);

export default Mountains;
