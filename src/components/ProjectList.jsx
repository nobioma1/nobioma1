import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { Title, Projects, Project, ProjectInfo, Links } from '../styles';
import data from '../data';

const ProjectList = () => {
  return (
    <div>
      <Title>Projects</Title>
      <Projects>
        {data.projects.map((project, index) => (
          <Project key={index}>
            <img
              src={project.imag}
              alt={`${project.name} project screenshot`}
            />
            <ProjectInfo>
              <h4>{project.name}</h4>
              <p>
                {project.tech.map((tech, index) => (
                  <span key={index}>
                    {tech}
                    {project.tech.length - 1 !== index ? ',' : ''}
                  </span>
                ))}
              </p>
              <Links>
                {project.github && (
                  <a href={project.github}>
                    <FaGithub />
                  </a>
                )}
                {project.link && (
                  <a href={project.link}>
                    <FaGlobe />
                  </a>
                )}
              </Links>
            </ProjectInfo>
          </Project>
        ))}
      </Projects>
    </div>
  );
};

export default ProjectList;
