import React from 'react';
import styled from 'styled-components';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDev,
} from 'react-icons/fa';

const Contact = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  cursor: pointer;
  font-weight: lighter;

  &:last-child {
    margin-right: 0;
  }
`;

const Icon = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    svg {
      font-size: 3.2rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;

const Socials = () => {
  return (
    <Contact>
      <Icon>
        <a
          href="https://github.com/nobioma1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </Icon>
      <Icon>
        <a
          href="https://twitter.com/nobleobioma_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </Icon>
      <Icon>
        <a
          href="https://linkedin.com/in/nobleobioma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </Icon>
      <Icon>
        <a href="mailto:nobioma1@gmail.com">
          <FaEnvelope />
        </a>
      </Icon>
      <Icon>
        <a href="https://dev.to/nobleobioma">
          <FaDev />
        </a>
      </Icon>
    </Contact>
  );
};

export default Socials;
