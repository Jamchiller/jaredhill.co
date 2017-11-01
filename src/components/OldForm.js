import styled, { css } from 'styled-components';

export const Form = styled.form`
  & > * + * {
    margin-top: ${p => p.theme.space[3]};
  }
`;

export const FormRow = styled.div`
  position: relative;
  ${'' /* overflow: hidden; */};
`;

export const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.colors.grey1};
    transform-origin: center top;
    transition: transform 0.25s;
    z-index: -20;
  }
`;

export const Label = styled.label`
  position: relative;
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  color: ${p => p.theme.colors.bg};
  ${'' /* background-color: ${p => p.theme.colors.grey1}; */} transform-origin: left center;
  transition: transform 0.25s ease-out, color 0.15s ease-out;
`;

const inputStyles = css`
  padding: 0.5rem;
  padding-bottom: 0.5rem;
  border: 0.25rem solid ${p => p.theme.colors.grey1};
  &:focus,
  &:valid {
    & + ${LabelWrapper}::after {
      transform: scaleY(0.5) translateY(-100%);
      transition-duration: 0.5s;
    }
    & + ${LabelWrapper} > ${Label} {
      transform: translateY(-110%) scale(0.8);
    }
  }
  &:valid + ${LabelWrapper}::after {
    background-color: green;
  }
`;

export const Input = styled.input`${inputStyles};`;

export const TextArea = styled.textarea`${inputStyles};`;
