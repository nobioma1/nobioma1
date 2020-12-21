import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import Project from "@shared/project";
import SectionTitle from "@shared/sectionTitle";
import { StyledSection } from "@styled/sections";
import data from "../../data";

const ProjectsContainer = styled(StyledSection)`
  h3 {
    color: white;
  }

  @media only screen and (min-width: 720px) {
    .others {
      display: flex;
      justify-content: center;
    }
  }
`;

const Projects = () => {
  const query = useStaticQuery(graphql`
    {
      mud: file(relativePath: { eq: "mudgame.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bravo: file(relativePath: { eq: "bravo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      politico: file(relativePath: { eq: "politico.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      droom: file(relativePath: { eq: "droom.png" }) {
        childImageSharp {
          fluid(maxWidth: 820) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ProjectsContainer id="work">
      <SectionTitle title="Projects" color="#FFF" />
      <section>
        <div>
          {data.projects
            .slice(1, 3)
            .map(({ name, detail, image, ...props }) => (
              <Project
                fluid
                key={name}
                title={name}
                description={detail}
                imageSrc={query[image].childImageSharp.fluid}
                {...props}
              />
            ))}
        </div>

        <SectionTitle
          title="Other Projects"
          color="#FFF"
          noLine
          position="center"
        />
        <div className="others">
          {data.projects.slice(3).map(({ name, detail, image, ...props }) => (
            <Project
              card
              key={name}
              title={name}
              description={detail}
              imageSrc={query[image].childImageSharp.fluid}
              {...props}
            />
          ))}
        </div>
      </section>
    </ProjectsContainer>
  );
};

export default Projects;
