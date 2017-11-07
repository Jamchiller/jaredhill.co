import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import Title from '../components/Title';
import Section from '../components/Section';
import CaseStudy from '../components/CaseStudy';
import medicspot from '../img/medicspot.png';
import citizenm from '../img/citizenm.png';
import nudge from '../img/nudge.png';

const studies = [
  {
    title: 'MedicSpot',
    body: [
      'Fast-growing telemedicine startup MedicSpot required a complete redesign of the interface used by their doctors during video calls. I undertook a two-week sprint with three other team members, utilising the entire UX process, including interviews with GPs, three Design Studios and a tonne of user testing.',
      'With a focus on increased engagement, automation and convenience, we built an interface that gave doctors access to all consultation notes without clicking outside the app, allowing them to concentrate on the thing that matters most: the patient.',
    ],
    image: medicspot,
    url:
      'https://medium.com/sketch-app-sources/redesigning-medicspot-a-case-study-59310295bdf4',
  },
  {
    title: 'CitizenM',
    body: [
      'Tasked with creating a responsive, mobile-first website for CitizenM that would allow travellers to plan and book ‘local’ experiences, myself and two other UX designers carried out extensive research to understand the booking habits of the modern traveller.',
      'Finding that trust was an the most important factor when booking experiences, we designed Citizen App. The app allows users to search, explore and book local experiences through actual local guides, moving the emphasis away from the experiences themselves and onto those that know the most about them. The app empowers any local with knowledge about their city to show tourists around, and in turn, gives tourists access to more authentic travel experiences.',
    ],
    image: citizenm,
    url:
      'https://medium.com/@jamchiller/citizen-app-a-new-way-to-travel-3bd9c45ec580',
  },
  {
    title: 'Nudge',
    body: [
      'Briefed to create an app to solve a specific user problem, I developed a productivity app that would help my user overcome distractions with gentle ‘nudges’ reminding them to get back to work.',
      'The resulting app, Nudge, allowed the user to set specific work blocks and designate how quickly to be reminded if they became distracted by their phone or moved away from their work desk.',
    ],
    image: nudge,
    url:
      'https://medium.com/@jamchiller/nudge-the-better-way-to-get-back-to-work-ed6e93269aae',
  },
];

const caseStudies = studies.map(({ title, image, body, url }) => (
  <CaseStudy title={title} image={image} url={url}>
    {body.map(para => <p>{para}</p>)}
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
