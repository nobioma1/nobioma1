import React from 'react';
import styled from 'styled-components';
import SimpleIcons from 'simple-icons-react-component';

import Layout from './Layout';
import data from '../data';
import avatar from '../assets/noble.jpg';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h2 {
    margin-top: 15px;
    font-size: 3rem;
  }

  p {
    font-size: 2rem;
    text-align: justify;
    line-height: 1.5;
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
    align-items: flex-start;
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
      padding-top: 20px;
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

const icon = (name = '') => {
  switch (name.toLowerCase()) {
    case 'html':
      return <SimpleIcons name="HTML5" />;
    case 'css':
      return <SimpleIcons name="CSS3" />;
    case 'javascript':
      return <SimpleIcons name="JavaScript" />;
    case 'node.js':
      return <SimpleIcons name="Node.js" />;
    case 'reactjs':
      return <SimpleIcons name="React" />;
    case 'python':
      return <SimpleIcons name="Python" />;
    case 'graphql':
      return <SimpleIcons name="GraphQL" />;
    case 'express':
      return <SimpleIcons name="JavaScript" />;
    default:
      return;
  }
};

const About = () => {
  return (
    <Layout bg="#FFFFFF" title="About" id="about">
      <AboutContainer>
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
              {icon(skill)}
              <p>{skill}</p>
            </div>
          ))}
        </Lang>
      </AboutContainer>
    </Layout>
  );
};

export default About;
