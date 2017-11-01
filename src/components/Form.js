import styled, { css } from 'styled-components';
import shadow from '../styles/shadow';

export const Form = styled.form`
  z-index: 0;
  & > * + * {
    margin-top: ${p => p.theme.space[3]};
  }
`;

export const FormRow = styled.div`
  & > * + * {
    margin-top: ${p => p.theme.space[3]};
  }
  @media (min-width: 40em) {
    display: flex;
    & > * + * {
      margin-top: 0;
      margin-left: ${p => p.theme.space[3]};
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  ${'' /* ${shadow(1, 2)}; */};
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: bold;
  line-height: 1;
  color: ${p => p.theme.colors.grey[3]};
  transform-origin: left center;
  transition: transform 0.2s ease-out;
  pointer-events: none;
`;

const inputStyles = css`
  width: 100%;
  height: 2.75rem;
  padding: 1rem;
  font-size: 0.85rem;
  background-color: ${p => p.theme.colors.grey[0]};
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 40em) {
    border-radius: 4px;
  }
  &:focus,
  &:valid {
    & + ${Label} {
      transform: translate(-1rem, -250%) scale(0.9);
    }
  }
  &:valid {
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;

export const Input = styled.input`${inputStyles};`;

export const TextArea = styled.textarea`
  ${inputStyles};
  height: auto;
  resize: none;
  line-height: 1.4;
`;
