import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Container from '../components/Container';
import Section from '../components/Section';
import ContactSection from '../components/ContactForm';

class Contact extends React.Component {
  render() {
    const siteTitle = `Contact | ${this.props.data.site.siteMetadata.title}`;
    return (
      <Container py={[4, 4, 5]}>
        <Helmet title={siteTitle} />
        <Section title="Get in touch" id="contact">
          <ContactForm />
        </Section>
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
