import React from 'react';
import {
  AboutContainer,
  ImageContainer,
  Title,
  AboutInfo,
  Lang,
  CodingAvatar,
} from '../styles';
import coding from '../assets/coding.svg';
import data from '../assets/data';

const About = () => {
  return (
    <AboutContainer>
      <CodingAvatar>
        <ImageContainer>
          <img src={coding} alt="Coding" />
        </ImageContainer>
      </CodingAvatar>
      <AboutInfo>
        <Title>About Me</Title>
        <p>{data.bio}</p>
        <p>I'm good at:</p>
        <Lang>
          {data.languages.map((lang, index) => (
            <p key={index}>{lang}</p>
          ))}
          {data.frameworks.map((fw, index) => (
            <p key={index}>{fw}</p>
          ))}
        </Lang>
      </AboutInfo>
    </AboutContainer>
  );
};

export default About;
