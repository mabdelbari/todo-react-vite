import styled from "styled-components";

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0.2rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: ${(props) => `var(${props.color})`};
  }
`;

ButtonIcon.defaultProps = {
  color: "--color-brand-100",
};

export default ButtonIcon;
