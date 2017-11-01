import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import Helmet from 'react-helmet';
import Container from '../components/Container';
import markdownStyles from '../styles/markdown';

const Main = Container.withComponent('main');

const Header = styled.header`
  & > h1 {
    font-size: 2rem;
    line-height: 1;
    @media (min-width: 40em) {
      font-size: 3rem;
    }
  }
`;

const Date = styled.small`font-size: 0.85rem;`;

const Markdown = styled.div`
  font-family: Georgia, georgia, serif;
  font-size: 1.125em;
  margin-top: 1em;
  ${markdownStyles};
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { title: siteTitle } = this.props.data.site.siteMetadata;
    return (
      <Main maxWidth={'60ch'} mt={[2, 3]} p={0}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Header>
          <h1>{post.frontmatter.title}</h1>
          <Date>{post.frontmatter.date}</Date>
        </Header>
        <Markdown dangerouslySetInnerHTML={{ __html: post.html }} />
      </Main>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
