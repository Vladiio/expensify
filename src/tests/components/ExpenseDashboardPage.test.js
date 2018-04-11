import React from 'react';
import { shallow } from 'enzyme';

import ExpenseDashboardPage from '../../componenets/ExponseDashboardPage';

it('should render ExpenseDashBoardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
