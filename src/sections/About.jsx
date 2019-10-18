import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/Layout';
import data from '../data';
import avatar from '../assets/noble.jpg';
import icons from '../utils/icons';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h2 {
    margin-top: 15px;
    font-size: 3rem;
  }

  p {
    font-size: 2.2rem;
    text-align: justify;
    line-height: 1.8;
  }
`;

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;

  & > div {
    width: 200px;
    height: 200px;
    margin: 10px 0;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    margin-top: 0px;
    align-items: center;
    justify-content: space-between;

    & > div {
      width: 25%;
      margin: 10px 0;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    & > p {
      width: 70%;
    }
  }
`;

const Lang = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    border-radius: 3px;
    margin: 5px 0;
    border: 1px solid black;
    width: 45%;
    font-size: 2rem;
    padding: 5px;
    font-weight: 500;
    display: flex;
    align-items: center;
    transition: 0.4s ease-in-out;

    & > div {
      width: 25px !important;
      height: 25px;
      margin-right: 10px;

      & > svg {
        width: 25px;
        height: 25px;
      }
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const About = () => {
  return (
    <Layout bg="#18171c" title="About" id="about" centerY>
      <AboutContainer>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <AboutInfo>
            <div>
              <img src={avatar} alt="Noble's Avatar" />
            </div>
            <p>{data.bio}</p>
          </AboutInfo>
          <h2>Skills</h2>
          <Lang>
            {data.skills.map((skill, index) => (
              <div key={index}>
                {icons(skill)}
                <p>{skill}</p>
              </div>
            ))}
          </Lang>
        </ScrollAnimation>
      </AboutContainer>
    </Layout>
  );
};

export default About;
