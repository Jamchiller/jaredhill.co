import styled, { css } from 'styled-components';
import t from '../styles/theme';
import shadow from '../styles/shadow';

export const Form = styled.form`
  z-index: 0;
  & > * + * {
    margin-top: ${t.space[3]};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: ${t.fontSizes[0]};
  font-weight: bold;
  line-height: 1;
  color: ${t.colors.grey[3]};
  transform-origin: left center;
  transition: transform 0.15s ease-out;
  pointer-events: none;
`;

const inputStyles = css`
  width: 100%;
  min-height: 2.75rem;
  padding: 0.75rem;
  font-size: 0.85rem;
  background-color: ${t.colors.grey[0]};
  box-shadow: -3px 3px 0 rgba(0, 0, 0, 0.2);
  &:focus,
  &:valid,
  &:not(:placeholder-shown) {
    & + ${Label} {
      transform: translate3d(-1rem, -260%, 0) scale3d(0.9, 0.9, 1);
    }
  }
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input.attrs({
  placeholder: ' ',
})`
  ${inputStyles};
`;

export const TextArea = styled.textarea.attrs({
  placeholder: ' ',
})`
  ${inputStyles};
  height: auto;
  resize: none;
  line-height: 1.4;
`;

export const Row = styled.div`
  text-align: center;
  & > * + * {
    margin-top: ${t.space[3]};
  }
`;
