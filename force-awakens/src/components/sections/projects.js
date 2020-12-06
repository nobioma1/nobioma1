import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import Project from "@shared/project";
import SectionTitle from "@shared/sectionTitle";
import { StyledSection } from "@styled/sections";

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
      mudGame: file(relativePath: { eq: "mudgame.png" }) {
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
      placeholder1: file(relativePath: { eq: "placeholder1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholder2: file(relativePath: { eq: "placeholder2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
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
          <Project
            title="Multi-User Dungeon Game (MUD)"
            description="A Full-Stack multiplayer real-time virtual world web
            application. Players can transverse rooms (North, South, East,
              West), view descriptions of rooms, and chat with other players
              in the same room."
            fluid
            imageSrc={query.mudGame.childImageSharp.fluid}
            stack="React, Redux, Django, Pusher"
          />
          <Project
            title="Bravo"
            description="Acknowledge the awesome work done by your co-workers."
            fluid
            imageSrc={query.bravo.childImageSharp.fluid}
            stack="React, Redux, ExpressJs, PostgreSQL, Knex, React-Testing-Library, Slack API."
          />
        </div>

        <SectionTitle
          title="Other Projects"
          color="#FFF"
          noLine
          position="center"
        />
        <div className="others">
          <Project
            fluid
            imageSrc={query.politico.childImageSharp.fluid}
            title="Politico"
            description="Politico enables citizens give their mandate to politicians
            running for different government offices while building trust in
            the process through transparency."
            stack="JavaScript, ExpressJs"
            card
          />
          <Project
            fluid
            imageSrc={query.droom.childImageSharp.fluid}
            title="Droom"
            description="Find jobs by matching users with companies. Tinder for Jobs."
            stack="Node/ExpressJs, PostgreSQL, Knex, Jest"
            card
          />
        </div>
      </section>
    </ProjectsContainer>
  );
};

export default Projects;
