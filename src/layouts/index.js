import React from 'react';
import Link from 'gatsby-link';
import styled, { ThemeProvider } from 'styled-components';
import { space } from 'styled-system';
import t from '../styles/theme';
import '../styles/global';
import '../styles/prism-duotone-light.css';

import Mountains from '../components/Mountains';
import Header from '../components/Header';

const Container = styled.div`
  ${space};
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const pages = ['/', '/blog', '/contact'];
    return (
      <ThemeProvider theme={t}>
        <Container pt={[2, 3]} pb={[4, 3]} px={[2, 3]}>
          {pages.includes(location.pathname) && <Mountains />}
          <Header current={location.pathname} />
          {children()}
        </Container>
      </ThemeProvider>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
