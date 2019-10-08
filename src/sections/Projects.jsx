import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Card from '../components/Card';
import data from '../data';

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Projects = () => {
  return (
    <Layout bg="#F0F0F0" title="Projects" id="projects">
      <ProjectsContainer>
        {data.projects.map((project, index) => {
          console.log(parseInt(`${index}000`, 10));
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
