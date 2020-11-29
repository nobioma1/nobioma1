import React from "react";

import Layout from "@layouts/layout";
import Header from "@components/header";
import Hero from "@sections/hero";
import Featured from "@sections/featured";
import About from "@sections/about";
import Projects from "@sections/projects";
import Footer from "@sections/footer";
import Articles from "@sections/articles";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Featured />
      <About />
      <Projects />
      <Articles />
      <Footer />
    </Layout>
  );
}
