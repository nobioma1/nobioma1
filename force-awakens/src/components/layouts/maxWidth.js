import React from "react";
import styled from "styled-components";

const StyledMaxWidth = styled.div`
  width: 100%;
  ${({ theme, bgColor, color, position, zIndex }) => `
   background-color: ${bgColor ? theme.colors[bgColor] : "initial"};
   color: ${color ? color : "initial"};
   position: ${position ? position : "initial"};
   z-index: ${zIndex ? zIndex : "initial"}`};

  @media only screen and (min-width: 720px) {
    section {
      max-width: 980px;
      margin: 0 auto;
    }
  }
`;

const MaxWidthLayout = ({ children, ...styles }) => {
  return (
    <StyledMaxWidth {...styles}>
      <section>{children}</section>
    </StyledMaxWidth>
  );
};

export default MaxWidthLayout;
