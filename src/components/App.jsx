import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Normalize from 'react-normalize';
import ReactGA from 'react-ga';

import Particles from './Particles';
import Header from './Header';
import Home from '../sections/Home';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Articles from '../sections/Articles';

const GlobalStyle = createGlobalStyle`
  *,
  html {
    margin: 0;
    box-sizing: border-box;
    font-size: 50%;

    @media (min-width: 500px) {
    *,
    html {
      font-size: 62.5%;
    }
  }
  }

  body {
    font-family: 'Noto Sans', sans-serif, -apple-system, BlinkMacSystemFont;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0A2342;
  }
`;

const App = () => {
  // Google Analytics
  ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <main>
      <Normalize />
      <GlobalStyle />
      <Particles />
      <Header />
      <Home />
      <About />
      <Projects />
      <Articles />
    </main>
  );
};

export default App;
