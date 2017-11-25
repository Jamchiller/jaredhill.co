import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import Link from 'gatsby-link';
import QuoteSlider from './QuoteSlider';
import { textShadow } from '../styles/utils';
import t from '../styles/theme';

const Section = styled.section`
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  color: ${t.colors.textLight};
  text-align: center;
  ${textShadow(1)};
  & > * + * {
    margin-top: ${t.space[3]};
  }
`;

const quotes = [
  {
    text: 'Not as smart or funny as he thinks he is.',
    author: 'Antoni Buccini',
  },
  {
    text: 'Wears an inappropriately short dressing gown.',
    author: 'Mark Tureck',
  },
  {
    text: "I beat him at table tennis and he's still bitter about it.",
    author: 'Oliver Phillips',
  },
  {
    text: 'Could be really pretty if he made an effort.',
    author: 'Rosie Hill',
  },
  {
    text: 'Jared ‘you owe me for that coffee five months ago’ Hill',
    author: 'Phoebe Chandler',
  },
  {
    text: 'Allergic to the sun.',
    author: 'Tilly Hill',
  },
  {
    text: 'He drinks Huel all in one go, like a pelican. It’s gross.',
    author: 'Han Craig',
  },
  {
    text: 'He once made me laugh. Just the one time.',
    author: 'Joel McCluskey',
  },
  {
    text: 'His mum still buys his pants.',
    author: 'Ruby Stevenson',
  },
  {
    text: 'Alcohol just makes him even more irritating.',
    author: 'Oscar Dell’Anna',
  },
  {
    text: 'Jared Hill. No volume control.',
    author: 'Kimberly Broom',
  },
  {
    text: 'Playing squash against him in a skirt still haunts me.',
    author: 'James Metcalfe',
  },
  {
    text: 'The worst taste in "hilarious" YouTube videos. Still scarred.',
    author: 'Hannah Phillips',
  },
];

const HomeSection = ({ label, title, direction, posts }) => (
  <Section>
    <QuoteSlider quotes={quotes} />
    <p>
      Hello, I'm Jared and I'm a UX Designer based in London. The above quotes are
      real: in the name of transparency, I asked the people closest to me to describe my worst qualities.
    </p>
    <p>
      If you <em>still</em> want to work with me, you can{' '}
      <Link to="/work">view my portfolio here</Link>.
    </p>
  </Section>
);

export default HomeSection;
