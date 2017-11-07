import React from 'react';
import styled from 'styled-components';
import t from '../styles/theme';
import { serif, sans } from '../styles/utils';
import { ExternalLinkButton } from './Button';

const Content = styled.div`
  ${serif};
  & > * + * {
    margin-top: ${t.space[2]};
  }
  @media screen and (min-width: 50em) {
    margin-right: ${t.space[3]};
    flex: 1 1 60%;
    & > * + * {
      margin-top: ${t.space[3]};
    }
  }
`;

const Image = styled.div`flex: 1 1 40%;`;

const Title = styled.h2`
  font-size: ${t.fontSizes[2]};
  ${sans};
  @media screen and (min-width: 50em) {
    font-size: ${t.fontSizes[3]};
  }
`;

const Container = styled.article`
  text-align: center;
  & + article {
    margin-top: ${t.space[4]};
  }
  & > * + * {
    margin-top: ${t.space[3]};
  }
  @media screen and (min-width: 50em) {
    display: flex;
    flex-direction: row;
    align-items: center;
    & + article {
      margin-top: ${t.space[5]};
    }
    &:nth-child(even) > ${Content} {
      order: 1;
      margin-right: 0;
      margin-left: ${t.space[3]};
    }
  }
`;

export default ({ title, image, url, children }) => (
  <Container>
    <Content>
      <Title>{title}</Title>
      {children}
      <ExternalLinkButton href={url} target="_blank" rel="noopener">
        View the full case study on Medium
      </ExternalLinkButton>
    </Content>
    <Image>
      <img src={image} alt={`${title} case-study screenshot`} />
    </Image>
  </Container>
);
