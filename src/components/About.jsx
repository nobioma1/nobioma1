import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs } from 'react-icons/fa';

import {
  AboutContainer,
  ImageContainer,
  Title,
  AboutInfo,
  Lang,
  CodingAvatar,
} from '../styles';
import coding from '../assets/coding.svg';
import data from '../data';

const icon = name => {
  switch (name.toLowerCase()) {
    case 'html':
      return <FaHtml5 />;
    case 'css':
      return <FaCss3 />;
    case 'javascript':
      return <FaJs />;
    case 'nodejs':
      return <FaNodeJs />;
    case 'react':
      return <FaReact />;
    default:
      return;
  }
};

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
            <p key={index}>
              <i>{icon(lang)}</i>
              {lang}
            </p>
          ))}
          {data.frameworks.map((fw, index) => (
            <p key={index}>
              <i>{icon(fw)}</i>
              {fw}
            </p>
          ))}
        </Lang>
      </AboutInfo>
    </AboutContainer>
  );
};

export default About;
