import React from "react";

import Main from "@layouts/main";
import MaxWidthLayout from "@layouts/maxWidth";
import { StyledSectionsWrapper } from "@styled/sections";
import SEO from "@components/seo";
import data from "../data";

const BlogPage = () => {
  return (
    <Main>
      <SEO title="Blog" keywords={data.stack} />
      <MaxWidthLayout>
        <StyledSectionsWrapper>my blog</StyledSectionsWrapper>
      </MaxWidthLayout>
    </Main>
  );
};

export default BlogPage;
