import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Particles from './components/Particles';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';

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
  return (
    <React.Fragment>
      <GlobalStyle />
      <Particles />
      <Header />
      <Home />
      <About />
      <Projects />
    </React.Fragment>
  );
};

export default App;
