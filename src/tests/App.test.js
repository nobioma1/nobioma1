import React from 'react';
import renderer from 'react-test-renderer';

import App from '../components/App';

describe('App', () => {
  it('App Should Match Snapshot', () => {
    const tree = renderer.create(<App />);

    expect(tree).toMatchSnapshot();
  });
});
