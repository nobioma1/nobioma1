import React, { useState } from 'react';
import Particles from 'react-particles-js';

import { AppContainer, GlobalCss } from '../styles';
import Home from './Home';
import About from './About';
import Header from './Header';
import ProjectList from './ProjectList';
import Footer from './Footer';
import particlesParams from '../particles.js';

const App = () => {
  const [mode, setMode] = useState('light');

  const selectMode = mode => setMode(mode);

  return (
    <React.Fragment>
      {mode === 'dark' && (
        <Particles
          style={{ position: 'fixed', left: 0, zIndex: 0 }}
          params={particlesParams}
        />
      )}
      <GlobalCss mode={mode} />
      <AppContainer>
        <Header mode={mode} selectMode={selectMode} />
        <Home />
        <About />
        <ProjectList />
        <Footer />
      </AppContainer>
    </React.Fragment>
  );
};

export default App;
