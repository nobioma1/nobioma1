import React from "react";
import styled from "styled-components";

import { StyledLine } from "@styled/line";

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 1.2rem 0;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ position }) => (position ? position : "initial")};

  @media only screen and (min-width: 720px) {
    padding: 1.2rem
      ${({ paddingRight, theme }) =>
        paddingRight ? paddingRight : theme.spacing.md};
  }

  h3 {
    margin: 0 ${({ theme, noLine }) => (noLine ? 0 : theme.spacing.md)};
    color: ${({ color }) => color || "unset"};
    text-transform: uppercase;
    letter-spacing: 0.155em;
  }
`;

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.color
 * @param {string} props.position
 * @param {string} props.direction
 * @param {boolean} props.noLine
 */
const SectionTitle = ({ title, color, noLine, ...styles }) => {
  return (
    <TitleContainer color={color} noLine={noLine} {...styles}>
      <StyledLine width="30px" color={color} noLine={noLine} />
      <h3>{title}</h3>
    </TitleContainer>
  );
};

export default SectionTitle;
