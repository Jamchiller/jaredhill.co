import React from 'react';
import Link from 'gatsby-link';
import styled, { ThemeProvider } from 'styled-components';
import { space } from 'styled-system';
import t from '../styles/theme';
import '../styles/global';

import Header from '../components/Header';
import { Footer, FooterContent, Divider } from '../components/Footer';

const Container = styled.div`
  ${space};
  position: relative;
  ${'' /* min-height: 100vh; */}
  ${'' /* overflow: hidden; */}
  background: linear-gradient(${t.colors.primary}, ${t.colors.tertiary} 33%);
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const pages = ['/', '/blog', '/contact'];
    return (
      <ThemeProvider theme={t}>
        <div>
          <Container py={[2, 3]} px={[2, 3]}>
            <Header current={location.pathname} />
            {children()}
          </Container>
          <Footer>
            <FooterContent>
              <h2>Don't be shy, say hello.</h2>
              <p>
                You can contact me here. Or on Twitter. Or Medium. Or Linkedin.
                Or Dribbble.
              </p>
              <Divider />
              <p>
                This site was lovingly developed in brand-spanking new GatsbyJS
                by my friend @_oliverjam.
              </p>
              <p>You can say hello and check out his other work here.</p>
            </FooterContent>
          </Footer>
        </div>
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
