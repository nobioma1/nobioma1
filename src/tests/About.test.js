import React from 'react';
import renderer from 'react-test-renderer';

import About from '../components/About';

describe('About', () => {
  it('About Should Match Snapshot', () => {
    const tree = renderer.create(<About />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
