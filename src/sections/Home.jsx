import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Intro from '../components/Intro';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout centerX centerY fullHeight id="home">
      <ScrollAnimation animateIn="zoomIn" animateOnce>
        <Intro />
      </ScrollAnimation>
    </Layout>
  );
};

export default Home;
