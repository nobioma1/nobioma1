import React from "react";
import styled from "styled-components";
import {
  FaAt,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaDev,
} from "react-icons/fa";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { StyledLine } from "@styled/line";

const SocialsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (min-width: 720px) {
    width: 60px;
    flex-direction: column;
    position: absolute;
    right: 0;
    bottom: -40px;
  }

  svg {
    padding: 0 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.oxfordBlue};
    transition: 0.4s;

    &:hover {
      transform: scale(1.5);
      color: ${({ theme }) => theme.colors.maxBlueGreen};
    }
  }
`;

const Link = ({ children, name, href }) => {
  return (
    <OutboundLink
      name={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </OutboundLink>
  );
};

const Socials = () => {
  return (
    <SocialsContainer>
      <Link name="gmail-nobioma1" href="mailto:nobioma1@gmail.com">
        <FaAt />
      </Link>
      <Link name="github-nobioma1" href="https://github.com/nobioma1">
        <FaGithub />
      </Link>
      <Link
        name="linkedin-nobleobioma"
        href="https://linkedin.com/in/nobleobioma"
      >
        <FaLinkedin />
      </Link>
      <Link name="twitter-nobooln" href="https://twitter.com/nobooln">
        <FaTwitterSquare />
      </Link>
      <Link name="dev-nobleobioma" href="https://dev.to/nobleobioma">
        <FaDev />
      </Link>
      <Link>
        <StyledLine vertical />
      </Link>
    </SocialsContainer>
  );
};

export default Socials;
