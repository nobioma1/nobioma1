import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { StyledSubTitle } from "@styled/title";

const StyledProject = styled.div`
  & > .img {
    margin-bottom: 0.8rem;
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 720px) {
    display: flex;

    ${({ card, noReverse }) =>
      card
        ? `
      flex-direction: column;
      width: 35%;
      margin: 0 0.8rem;
    `
        : `
      &:nth-child(odd) {
        flex-direction: ${noReverse ? "row" : "row-reverse"};
      }
    `};

    & > .desc {
      display: flex;
      flex: 1;
      flex-direction: column;
      ${({ card }) =>
        card
          ? `
          padding: unset;
          `
          : `
      padding: 0 3rem;
      justify-content: center;
      `};
    }

    & > .img {
      flex: ${({ card }) => (card ? "initial" : 1)};
      width: ${({ card }) => (card ? "100%" : "initial")};
      margin: 2rem 0;
    }
  }
`;

const Project = ({ stack, fixed, title, imageSrc, description, ...props }) => {
  return (
    <StyledProject {...props}>
      <div className="img">
        <Img
          {...(fixed ? { fixed: imageSrc } : { fluid: imageSrc })}
          alt={title}
        />
      </div>
      <div className="desc">
        <StyledSubTitle>{title}</StyledSubTitle>
        <p>{description}</p>
        <p>&raquo; Built With: {stack}</p>
      </div>
    </StyledProject>
  );
};

export default Project;
