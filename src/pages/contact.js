import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Container from '../components/Container';
import ContactSection from '../components/ContactSection';

class Contact extends React.Component {
  render() {
    const siteTitle = `Contact | ${this.props.data.site.siteMetadata.title}`;
    return (
      <Container maxWidth={'60ch'}>
        <Helmet title={siteTitle} />
        <ContactSection
          label="Get in touch"
          title="Get in touch"
          id="contact"
        />
      </Container>
    );
  }
}

export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
