import React from "react";
import styled from "styled-components";
import {
  FaAt,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaDev,
} from "react-icons/fa";
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

const Socials = () => {
  return (
    <SocialsContainer>
      <FaAt />
      <FaGithub />
      <FaLinkedin />
      <FaTwitterSquare />
      <FaDev />
      <StyledLine vertical />
    </SocialsContainer>
  );
};

export default Socials;
