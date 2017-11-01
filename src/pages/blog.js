import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import BlogSection from '../components/BlogSection';

class Blog extends React.Component {
  render() {
    const siteTitle = `Blog | ${this.props.data.site.siteMetadata.title}`;
    const recentPosts = this.props.data.allMarkdownRemark.edges;
    return (
      <Container maxWidth="60ch">
        <Helmet title={siteTitle} />
        <BlogSection
          label="All posts"
          title="Blog"
          direction="column"
          posts={recentPosts}
          id="posts"
        />
      </Container>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
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
