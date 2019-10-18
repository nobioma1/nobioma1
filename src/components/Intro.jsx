import React from 'react';
import styled from 'styled-components';
import Socials from './Socials';
import { HomeButton } from './Button';

const IntroContainer = styled.header`
  color: white;

  & > h1 {
    font-size: 2.8rem;
    text-align: center;
    span {
      font-size: 3.9rem;
    }

    @media (min-width: 800px) {
      font-size: 4rem;
      text-align: center;
      span {
        font-size: 6rem;
      }
    }
  }

  & > p {
    font-size: 2.3rem;
    text-align: center;

    @media (min-width: 800px) {
      font-size: 3rem;
    }
  }
`;

const Hello = styled.p`
  width: fit-content;
  background-color: #4e6ac6;
  padding: 8px;
  margin: 5px 0;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 0px 2px #b2b2b2;
`;

const Intro = () => {
  return (
    <div
      style={{
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <IntroContainer>
        <Hello>Hello,</Hello>
        <h1>
          I am <span>Noble Obioma.</span>
        </h1>
        <p>A Full-Stack Web Developer</p>
      </IntroContainer>
      <Socials />
      <HomeButton link="about" />
    </div>
  );
};

export default Intro;
