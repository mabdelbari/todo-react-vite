import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  text-align: center;
  background-color: var(--color-brand-300);
  font-size: 5rem;
  font-weight: 500;
  letter-spacing: -5px;
  padding: 2.4rem 0;
  color: var(--color-grey-700);
`;

function Logo() {
  return <StyledLogo>ChickyTasky</StyledLogo>;
}

export default Logo;
