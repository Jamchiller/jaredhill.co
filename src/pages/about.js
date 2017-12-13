import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import Title from '../components/Title';
import Section from '../components/Section';
import Footer from '../components/Footer';
import headshot from '../img/me.jpg';

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
            I’m a User Experience Designer that’s big on ideas and obsessed with
            designing innovative yet practical digital experiences. Whilst
            relatively new to UX, I’ve got over <em>five years of commercial
            experience</em> across a number of disciplines.
          </p>
          <img src={headshot} alt="" />
          <p>
            Born and raised in one of the{' '}
            <a href="https://en.wikipedia.org/wiki/Perth"  target="_blank" rel="noopener" title="Perth, Western Australia | Wikipedia">
              most isolated cities in the world
            </a>, I’ve spent my career (and a lot of my free time, too) learning
            about human behaviour and the many things that make us tick. This
            interest first led me to marketing, then to customer experience
            management, where I consulted with retailers and brands to show them
            how they could use digital technologies to bridge the gap between
            their physical and digital presences.
          </p>
          <p>
            I quickly realised that I wanted to to move closer to the action,
            getting down and dirty designing the experiences themselves, and
            this led me to study the{' '}
            <a href="https://generalassemb.ly/" target="_blank" rel="noopener" title="General Assembly Home Page">
              immersive UX course at General Assembly
            </a>.
          </p>
          <p>
            I think that technology has the potential to change lives and the
            potential to destroy them, too. I want to be part of the good bit
            (obviously), and am currently developing a number of personal
            projects, including an app that helps people reduce their meat
            consumption and a VR app that helps people overcome{' '}
            <a href="https://en.wikipedia.org/wiki/Glossophobia" target="_blank" rel="noopener" title="Glossophobia | Wikipedia">
              glossophobia
            </a>. I usually try to make sites that help people <a href="http://canbeetsturnpoopredoramidying.com/"  target="_blank" rel="noopener" title="CanBeetsTurnPoopRedOrAmIDying.com">who have the same
            problems as me</a>.
          </p>
          <p>
            In my spare time, I’m a hobbyist writer, gym-goer and coffee
            drinker. I’m currently obsessed with{' '}
            <a href="https://uxdesign.cc/why-you-should-care-about-digital-brutalism-fa0c82d60133" target="_blank" rel="noopener" title="Why You Should Care About Digital Brutalism | Medium">digital brutalism</a>,{' '}
            <a href="https://timewellspent.io/"  target="_blank" rel="noopener" title="TimeWellSpent.io">
              Tristan Harris’ Time Well Spent movement
            </a>, and{' '}
            <a href="https://medium.com/@jamchiller/one-week-on-huel-one-small-step-for-man-one-giant-leap-for-my-bowels-a9026a48d94d"  target="_blank" rel="noopener" title="One Small Step for Man, One Giant Leap for My Bowels | Medium">
              Huel
            </a>.
          </p>
          <p>
            Like what you've heard? Let's <Link to="/contact"> grab a coffee</Link>.
          </p>
          <h2>What I’m good at:</h2>
          <ul>
            <li>Ideation & problem solving</li>
            <li>Creative & design strategy</li>
            <li>Visual Design (Sketch, Figma, Axure, Adobe Creative Suite)</li>
            <li>Wireframing and prototyping (Invision & Marvel)</li>
            <li>FED (mainly HTML & CSS)</li>
            <li>SEO & Google Analytics</li>
            <li>Copywriting</li>
            <li>Team leadership</li>
            <li>User Research</li>
            <li>Stakeholder management</li>
            <li>Other tech stuff: Github, Wordpress, Trello, Slack</li>
          </ul>
          <h2>How I do it:</h2>
          <p>
            I use the Double Diamond approach, with iterative
            design cycles following Lean/Agile methodologies. For evidence, check
            out <Link to="/work">my case studies</Link>.
          </p>
          <h2>What people say about me:</h2>
          <blockquote>
            <p>
              “Working with Jared was an excellent experience for MedicSpot.
              From the beginning, I found him to be an extremely knowledgeable
              UX designer and a creative thinker, and he and the team exceeded
              even our loftiest of expectations in their redesign of the doctor
              interface of the system. We were amazed at how quickly they
              understood the entire consultation process, interviewed lots of
              GPs and then came up with some incredible solutions to key
              problems for our doctors.
            </p>
            <p>
              Their designs make it a lot easier for doctors to interact our
              patients, and we’re in the process of implementing them now.”
            </p>
            <p>
              <cite>— Tarlochan Tor, founder of MedicSpot</cite>
            </p>
          </blockquote>
          <blockquote>
            <p>
              “Over my time working with Jared, I found him to be a talented
              individual with a innate ability to see the needs and wants of
              customers. He successfully managed our digital projects from
              conception to implementation with high quality outputs and great
              client feedback.
            </p>
            <p>
              He would be a tremendous asset to any team looking for a
              knowledgeable, outgoing and empathetic person with a broad set of
              skills. He also possesses a great team spirit and has excellent
              relationships at any level within an organisation.”
            </p>
            <p>
              <cite>
                — Simon Etchells, Group Digital Director at Lick Creative
              </cite>
            </p>
          </blockquote>
          <blockquote>
            <p>
              “Jared is an absolute well of knowledge and a true expert in his
              field (User-Experience Design). Working alongside great people
              brings about great results and our time at The Delta Group saw us
              deliver a brilliant end-product.
            </p>
            <p>
              Sharp minded and a great critical thinker, Jared is continuously
              able to provide solid solutions when faced with challenging
              scenarios. Certainly a high quality addition to any creative
              digital team and I do hope we cross working paths once again.”
            </p>
            <p>
              <cite>— Kristopher Chin, Front-End / UI Developer</cite>
            </p>
          </blockquote>
        </Section>
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
