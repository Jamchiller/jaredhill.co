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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(${t.colors.primary}, ${t.colors.tertiary} 750px);
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const hideFooter = ['/contact'];
    return (
      <ThemeProvider theme={t}>
        <div>
          <Container p={[2, 3]}>
            <Header current={location.pathname} />
            {children()}
          </Container>
          {!hideFooter.includes(location.pathname) && (
            <Footer>
              <FooterContent>
                <h2>Say hi.</h2>
                <p>
                  You can contact me using <Link to="/contact">this form</Link>.
                  Or on{' '}
                  <a
                    href="https://twitter.com/jamchiller"
                    target="_blank"
                    rel="noopener"
                  >
                    Twitter
                  </a>. Or{' '}
                  <a
                    href="https://medium.com/@jamchiller"
                    target="_blank"
                    rel="noopener"
                  >
                    Medium
                  </a>. Or{' '}
                  <a
                    href="https://linkedin.com/in/jaredmichaelhill"
                    target="_blank"
                    rel="noopener"
                  >
                    Linkedin
                  </a>. Or even{' '}
                  <a
                    href="https://dribbble.com/jamchiller"
                    target="_blank"
                    rel="noopener"
                  >
                    Dribbble
                  </a>. Really, there's no excuse.
                </p>
                <Divider />
                <p>
                  This site was lovingly developed with brand-spanking new{' '}
                  <a href="https://gatsbyjs.org/">Gatsby</a> by my friend{' '}
                  <a href="http://oliverjam.es">Oli</a>.
                </p>
              </FooterContent>
            </Footer>
          )}
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
