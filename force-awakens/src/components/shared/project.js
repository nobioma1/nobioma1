import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { StyledSubTitle } from "@styled/title";

const StyledProject = styled.div`
  & > .img {
    position: relative;
    margin-bottom: 0.8rem;
    cursor: pointer;

    &:hover {
      & > .overlay {
        visibility: visible;
      }
    }

    & > .overlay {
      visibility: hidden;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      position: absolute;
      width: 100%;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        margin: 0.8rem;
        color: #fff;
        text-decoration: none;

        &:hover {
          border-bottom: 1px solid white;
        }

        svg {
          margin: 0 0.3rem;
        }
      }
    }
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
        <div className="overlay">
          <a href={props.github} target="__blank">
            <FaGithub /> Github
          </a>
          {props.link && (
            <a href={props.link} target="__blank">
              <MdOpenInNew /> Go to App
            </a>
          )}
        </div>
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
