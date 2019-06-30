import React, { useState } from 'react';
import { AppContainer, GlobalCss } from '../styles';
import Home from './Home';
import About from './About';
import Header from './Header';
import ProjectList from './ProjectList';
import Footer from './Footer';


const App = () => {
  const [mode, setMode] = useState('light');
  
  const selectMode = mode => setMode(mode);

  return (
    <React.Fragment>
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

