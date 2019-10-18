import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Card from '../components/Card';
import data from '../data';

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 780px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Projects = () => {
  return (
    <Layout bg="#18171c" title="Projects" id="projects" centerY>
      <ProjectsContainer>
        {data.projects.map((project, index) => {
          return (
            <Card
              key={`${project.name}-${index}`}
              title={project.name}
              img={project.imag}
              alt={project.title}
              github={project.github}
              hostLink={project.link}
              stacks={project.stacks}
              detail={project.detail}
              delay={parseInt(`${index}00`, 10)}
            />
          );
        })}
      </ProjectsContainer>
    </Layout>
  );
};

export default Projects;
