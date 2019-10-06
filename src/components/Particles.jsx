import React from 'react';
import Particles from 'react-particles-js';
import particlesParams from '../particles';

export default () => {
  return (
    <Particles
      params={particlesParams}
      style={{ position: 'fixed', left: 0, zIndex: -999 }}
    />
  );
};
