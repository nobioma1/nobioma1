import React from "react";

import Main from "@layouts/main";
import Header from "@components/header";
import Hero from "@sections/hero";
import Featured from "@sections/featured";
import About from "@sections/about";
import Projects from "@sections/projects";
import Footer from "@sections/footer";
import Articles from "@sections/articles";
import { StyledSectionsWrapper } from "@styled/sections";
import MaxWidthLayout from "@layouts/maxWidth";

export default function Home() {
  return (
    <Main>
      <Header />
      <StyledSectionsWrapper>
        <Hero />
        <Featured />
        <MaxWidthLayout bgColor="oxfordBlue" color="#c4c4c4">
          <About />
          <Projects />
          <Articles />
          <Footer />
        </MaxWidthLayout>
      </StyledSectionsWrapper>
    </Main>
  );
}
