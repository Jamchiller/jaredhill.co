import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import Link from 'gatsby-link';
import Title from './Title';
import Card from './Card';
import { P } from './Blocks';

const Post = styled.article`
  ${space};
  &:first-child {
    margin-top: 0;
    margin-left: 0;
  }
`;

const PostLink = styled(Link)`
  transition: background-color 0.2s ease-out;
  text-decoration: none;
  &:hover {
    color: inherit;
    & h3 {
      text-decoration: none;
    }
  }
  @media (min-width: 40em), (hover: hover) {
    &:hover {
      background-color: ${p => p.theme.colors.grey[0]};
      & h3 {
        color: inherit;
        text-decoration: underline;
      }
    }
  }
`;

const BlogSection = ({ label, title, direction, posts }) => (
  <section aria-label={!title && label}>
    {title && <Title>{title}</Title>}
    <Card flexDirection={direction} mx={'auto'}>
      {posts.map((post, i) => {
        if (post.node.path !== '/404/') {
          const title = post.node.frontmatter.title || post.node.path;
          return (
            <PostLink key={i} to={post.node.frontmatter.path}>
              <Post p={[2, 3]} key={post.node.frontmatter.path}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>{post.node.frontmatter.date}</small>
                <P
                  mt={1}
                  dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                />
              </Post>
            </PostLink>
          );
        }
      })}
    </Card>
  </section>
);

export default BlogSection;
