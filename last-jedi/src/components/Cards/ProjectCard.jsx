import React from 'react';
import styled from 'styled-components';
import { MdOpenInNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

const ProjectCardContainer = styled.div`
  background: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  margin: 5px 0;
  border-radius: 3px;
  padding-bottom: 10px;
  color: black;
  line-height: 1.5;

  @media (min-width: 760px) {
    width: 380px;
    min-height: 320px;
    margin: 10px 0;
  }

  & > p {
    font-size: 1.6rem;
    margin: 0 10px;
    opacity: 0.7;
  }
`;

const ImgContainer = styled.div`
  max-height: 250px;

  img {
    width: 100%;
    height: 220px;
    border-radius: 3px 3px 0 0;
  }
`;

const Description = styled.div`
  width: 100%;
  padding: 10px;

  & > p {
    font-size: 1.8rem;
    overflow-wrap: break-word;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  align-items: center;

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
  }
`;

const Links = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #4e6ac6;
    margin-left: 10px;

    svg {
      vertical-align: middle;
      font-size: 2.3rem;
      color: #4e6ac6;
      cursor: pointer;
    }
  }
`;

const ProjectCard = ({
  title,
  img,
  alt,
  github,
  hostLink,
  stacks,
  detail,
  delay,
}) => {
  return (
    <ScrollAnimation animateIn="zoomIn" delay={delay} animateOnce>
      <ProjectCardContainer>
        <ImgContainer>
          <img src={img} alt={alt} />
        </ImgContainer>
        <Description>
          <Header>
            <h2>{title}</h2>
            <Links>
              <a href={github} target="__blank">
                Github <FaGithub />
              </a>
              {hostLink && (
                <a href={hostLink} target="__blank">
                  App <MdOpenInNew />
                </a>
              )}
            </Links>
          </Header>
          <p>{detail}</p>
        </Description>
        <p>&raquo; Built With: {stacks}</p>
      </ProjectCardContainer>
    </ScrollAnimation>
  );
};

export default ProjectCard;
