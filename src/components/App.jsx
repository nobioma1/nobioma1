import React from 'react';
import { AppContainer, GlobalCss } from '../styles';
import Home from './Home';
import About from './About';
import Header from './Header';
import ProjectList from './ProjectList';
import Footer from './Footer';

const App = () => {
  return (
    <React.Fragment>
      <GlobalCss />
      <AppContainer>
        <Header />
        <Home />
        <About />
        <ProjectList />
        <Footer />
      </AppContainer>
    </React.Fragment>
  );
};

export default App;
