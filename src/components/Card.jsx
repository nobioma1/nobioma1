import React from 'react';
import styled from 'styled-components';
import { MdOpenInNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const CardContainer = styled.div`
  background: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  margin: 5px 0;
  border-radius: 3px;
  padding-bottom: 5px;

  @media (min-width: 760px) {
    width: 360px;
    margin: 10px 0;
  }

  & > p {
    font-size: 1.5rem;
    margin: 0 5px;
    opacity: 0.7;
  }
`;

const ImgContainer = styled.div`
  max-height: 250px;

  img {
    width: 100%;
    border-radius: 3px 3px 0 0;
  }
`;

const Description = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    font-size: 2rem;
    width: 85%;
    font-weight: 500;
  }

  & > div {
    width: 15%;
    display: flex;
    justify-content: space-between;

    a {
      svg {
        font-size: 2rem;
        color: #4e6ac6;
        cursor: pointer;
      }
    }
  }
`;

const Card = ({ title, img, alt, github, hostLink, stacks }) => {
  return (
    <CardContainer>
      <ImgContainer>
        <img src={img} alt={alt} />
      </ImgContainer>
      <Description>
        <h2>{title}</h2>
        <div>
          <a href={github} target="__blank">
            <FaGithub />
          </a>
          {hostLink && (
            <a href={hostLink} target="__blank">
              <MdOpenInNew />
            </a>
          )}
        </div>
      </Description>
      <p>Built With: {stacks}</p>
    </CardContainer>
  );
};

export default Card;
