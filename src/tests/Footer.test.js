import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../components/Footer';

describe('Footer', () => {
  it('Footer Should Match Snapshot', () => {
    const tree = renderer.create(<Footer />);

    expect(tree).toMatchSnapshot();
  });
});
