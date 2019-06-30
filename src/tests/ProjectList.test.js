import React from 'react';
import renderer from 'react-test-renderer';

import ProjectList from '../components/ProjectList';

describe('ProjectList', () => {
  it('ProjectList Should Match Snapshot', () => {
    const tree = renderer.create(<ProjectList />);

    expect(tree).toMatchSnapshot();
  });
});
