import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import SectionTitle from "@shared/sectionTitle";
import { StyledSection } from "@styled/sections";
import data from "../../data";

const AboutContainer = styled(StyledSection)`
  position: relative;
  padding-top: 1.5rem;

  .squares {
    position: absolute;
    height: 30%;
    width: 30%;
    right: 10%;
    bottom: 15%;

    @media (min-width: 425px) {
      bottom: 30%;
    }
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

  return (
    <AboutContainer id="about">
      <SectionTitle title="About Me" color="#FFF" />
      <section>
        <p>
          I am Noble Obioma, a full-stack software engineer, a lover of music,
          and a baby bassist. My ultimate passion is building performant and
          reliable web-based applications to solve problems and tackling new
          problems. <br />I am a Certified AWS Solutions Architect – Associate
          with a Bachelor's Degree in Computer Science and have experience
          working in cross-functional teams. For fun, I enjoy listening to music
          and play a few instruments myself (the piano, and a bass guitar), I
          also love traveling and exploring beautiful places.
        </p>
        <br />
        <div>
          <p>Here’s a few technologies I have been working with:</p>
          <SkillsSection>
            {data.stack.map(skill => (
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
