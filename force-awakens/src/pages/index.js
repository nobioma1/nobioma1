import React, { useState } from "react";

import SEO from "@components/seo";
import Main from "@layouts/main";
import Header from "@components/header";
import Hero from "@sections/hero";
import Featured from "@sections/featured";
import About from "@sections/about";
import Projects from "@sections/projects";
import Footer from "@sections/footer";
import Articles from "@sections/articles";
import MaxWidthLayout from "@layouts/maxWidth";
import { StyledSectionsWrapper } from "@styled/sections";

export default function Home() {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <Main>
      <SEO title="Hi, I'm Noble" />
      <Header />
      <StyledSectionsWrapper>
        <Hero openContact={() => setContactOpen(true)} />
        <Featured />
        <MaxWidthLayout bgColor="oxfordBlue" color="#c4c4c4">
          <About />
          <Projects />
          <Articles />
          <Footer
            isContactOpen={isContactOpen}
            setContactOpen={setContactOpen}
          />
        </MaxWidthLayout>
      </StyledSectionsWrapper>
    </Main>
  );
}
