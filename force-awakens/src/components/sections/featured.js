import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import SectionTitle from "@shared/sectionTitle";
import MaxWidthLayout from "@layouts/maxWidth";
import Project from "@shared/project";

const FeaturedContainer = styled.div`
  padding: ${({ theme }) =>
    `0 ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md}`};
`;

const Featured = () => {
  const query = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "trackopp.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <MaxWidthLayout>
      <SectionTitle
        title="Featured Project"
        direction="row-reverse"
        paddingRight="3rem"
      />
      <FeaturedContainer>
        <Project
          title="JobHuntPad"
          description="Keep track of the progress on your job applications! Getting a job
          can be tough, tracking your applications should not."
          stack="React, Redux, Firebase, ExpressJs, Redis, Puppeteer, Node-cron."
          fluid
          imageSrc={query.file.childImageSharp.fluid}
          noReverse
        />
      </FeaturedContainer>
    </MaxWidthLayout>
  );
};

export default Featured;
