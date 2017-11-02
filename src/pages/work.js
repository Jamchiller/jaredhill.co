import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import Title from '../components/Title';
import Section from '../components/Section';
import CaseStudy from '../components/CaseStudy';

const studies = [
  {
    title: 'Omorovizca',
    body:
      'Born and raised in one of the most isolated cities in the world, I decided to try something a little different and moved from Australia to London in 2013.',
    image: 'https://placehold.it/300x600',
  },
  {
    title: 'Omorovizca',
    body:
      'Born and raised in one of the most isolated cities in the world, I decided to try something a little different and moved from Australia to London in 2013.',
    image: 'https://placehold.it/300x600',
  },
  {
    title: 'Omorovizca',
    body:
      'Born and raised in one of the most isolated cities in the world, I decided to try something a little different and moved from Australia to London in 2013.',
    image: 'https://placehold.it/300x600',
  },
];

const caseStudies = studies.map(({ title, image, body }) => (
  <CaseStudy title={title} image={image}>
    {body}
  </CaseStudy>
));

class Work extends React.Component {
  render() {
    const siteTitle = `${this.props.data.site.siteMetadata
      .title} | UX Designer`;
    const recentPosts = this.props.data.allMarkdownRemark.edges.slice(0, 3);
    return (
      <Container py={[4, 4, 5]}>
        <Helmet title={siteTitle} />
        <Section title="Stuff I've done">{caseStudies}</Section>
      </Container>
    );
  }
}

export default Work;

export const pageQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
