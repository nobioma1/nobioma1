import React from 'react';
import { HomeContainer, Hello, ImageContainer, Info } from '../styles';
import avatar from '../assets/avatar.jpg';

const Home = () => {
  return (
    <HomeContainer>
      <Info>
        <Hello>
          <p>Hello, I am</p>
        </Hello>
        <h1>Noble Obioma</h1>
        <p>Software Engineer</p>
      </Info>
      <ImageContainer>
        <img src={avatar} alt="Noble Obioma's Avatar" />
      </ImageContainer>
    </HomeContainer>
  );
};

export default Home;
