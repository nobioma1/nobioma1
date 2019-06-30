import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../components/Home';

describe('Home', () => {
  it('Home Should Match Snapshot', () => {
    const tree = renderer.create(<Home />);

    expect(tree).toMatchSnapshot();
  });
});
