import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import SectionTitle from "@shared/sectionTitle";
import MaxWidthLayout from "@layouts/maxWidth";
import Project from "@shared/project";
import data from "../../data";

const FeaturedContainer = styled.div`
  padding: ${({ theme }) =>
    `0 ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md}`};
`;

const Featured = () => {
  const { name, detail, image, ...props } = data.projects[0];
  const query = useStaticQuery(graphql`
    {
      jobhuntpad: file(relativePath: { eq: "trackopp.png" }) {
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
          title={name}
          description={detail}
          imageSrc={query[image].childImageSharp.fluid}
          {...props}
          fluid
          noReverse
        />
      </FeaturedContainer>
    </MaxWidthLayout>
  );
};

export default Featured;
