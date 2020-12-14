import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import SectionTitle from "@shared/sectionTitle";
import { StyledSection } from "@styled/sections";

const AboutContainer = styled(StyledSection)`
  position: relative;
  padding-top: 1.5rem;

  .squares {
    position: absolute;
    height: 30%;
    width: 30%;
    right: 10%;
    bottom: 30%;
  }
`;

const SkillsSection = styled.div`
  margin-top: 8px;

  & > p {
    margin: 0.6rem 0;
  }

  @media only screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 250px);
  }
`;

const About = () => {
  const query = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "squares.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  const skills = [
    "HTML",
    "CSS",
    "React",
    "NodeJs",
    "PostgreSQL",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Python",
    "Express",
    "Amazon Web Services(AWS)",
  ];

  return (
    <AboutContainer id="about">
      <SectionTitle title="About Me" color="#FFF" />
      <section>
        <p>
          Hello again! I'm Noble Obioma, a Full-Stack Engineer based in Nigeria.
          I love every bit of what I do, especially creating solutions to real
          problems that can be solved using technology and improving already
          existing solutions. Well, the bugs do not bug me.{" "}
          <span role="img" aria-label="smile">
            😁
          </span>
        </p>
        <br />
        <div>
          <p>Here’s a few technologies I have been working with:</p>
          <SkillsSection>
            {skills.map(skill => (
              <p key={skill}>
                <span> &gt;&#x5f;</span> {skill}
              </p>
            ))}
          </SkillsSection>
        </div>
      </section>
      <div className="squares">
        <Img
          loading="eager"
          fluid={query.file.childImageSharp.fluid}
          alt="squares"
        />
      </div>
    </AboutContainer>
  );
};

export default About;
