import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import Title from '../components/Title';
import Section from '../components/Section';
import Footer from '../components/Footer';

class About extends React.Component {
  render() {
    const siteTitle = `${this.props.data.site.siteMetadata
      .title} | UX Designer`;
    const recentPosts = this.props.data.allMarkdownRemark.edges.slice(0, 3);
    return (
      <Container py={[4, 4, 5]}>
        <Helmet title={siteTitle} />
        <Section title="A little bit about me">
          <p>
            Born and raised in one of the most isolated cities in the world, I
            decided to try something a little different and moved from Australia
            to London in 2013. Three years later and I've finally stopped
            calling duvets ‘doonas’ and trousers ‘pants,’ so I reckon I’m pretty
            well integrated at this point.
          </p>
          <p>
            Born and raised in one of the most isolated cities in the world, I
            decided to try something a little different and moved from Australia
            to London in 2013. Three years later and I've finally stopped
            calling duvets ‘doonas’ and trousers ‘pants,’ so I reckon I’m pretty
            well integrated at this point.
          </p>
          <p>
            As a marketer, I love leveraging both new and old media, brand
            building, and data-based decision making. As a graphic designer, I
            love intuitive uservexperience, digital media, and anything that
            looks nice. As a human, I love pesto pasta, Aussie rules football
            and the occasional cat video.
          </p>
          <h2>A little bit about me</h2>
          <h3>A subtitle</h3>
          <p>
            As a marketer, I love leveraging both new and old media, brand
            building, and data-based decision making. As a graphic designer, I
            love intuitive uservexperience, digital media, and anything that
            looks nice. As a human, I love pesto pasta, Aussie rules football
            and the occasional cat video.
          </p>
          <img src="http://placehold.it/1600x900" alt="" />
        </Section>
        {/* <BlogSection
          label="Recent Posts"
          direction={['column', 'column', 'row']}
          posts={recentPosts}
          id="posts"
        /> */}
      </Container>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query AboutQuery {
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
