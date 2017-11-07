import React from 'react';
import Transition from 'react-transition-group/Transition';

const defaultStyle = {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ in: inProp, duration, children }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <span
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </span>
    )}
  </Transition>
);

export default Fade;
