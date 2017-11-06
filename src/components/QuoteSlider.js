import React from 'react';
import styled, { css } from 'styled-components';
import Title from './Title';
import { sans } from '../styles/utils';
import t from '../styles/theme';

const highlight = css`
  display: inline;
  padding: 8px;
  ${sans};
  font-weight: 600;
  line-height: 2.5;
  color: ${t.colors.textLight};
  background-color: ${t.colors.primary};
  box-shadow: -12px 12px 0 rgba(0, 0, 0, 0.12);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  box-decoration-break: clone;
  @media screen and (min-width: 40em) {
    line-height: 1.75;
  }
`;

const Text = styled.p`
  ${highlight};
  font-size: 1.25rem;
  @media screen and (min-width: 40em) {
    font-size: ${t.fontSizes[3]};
  }
`;

const Author = styled.p`
  margin-top: 0.25rem;
  @media screen and (min-width: 40em) {
    margin-top: ${t.space[1]};
  }
`;

const Cite = styled.cite`
  ${highlight};
  font-size: 0.75rem;
  font-style: normal;
  @media screen and (min-width: 40em) {
    font-size: 1.25rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

const Quote = ({ text, author }) => (
  <Container>
    <blockquote>
      <Text>“{text}”</Text>
      <Author>
        <Cite>— {author}</Cite>
      </Author>
    </blockquote>
  </Container>
);

export default class QuoteSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
  }
  increment = () => {
    if (this.state.current === this.props.quotes.length - 1) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: (this.state.current += 1) });
    }
  };
  componentDidMount() {
    this.Interval = setInterval(this.increment, 6000);
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }
  render() {
    const { text, author } = this.props.quotes[this.state.current];
    return <Quote text={text} author={author} />;
  }
}
