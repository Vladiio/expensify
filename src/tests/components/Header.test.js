import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import Header from '../../componenets/Header';

it('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
