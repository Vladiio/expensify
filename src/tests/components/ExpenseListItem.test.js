import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import { ExpenseListItem } from '../../componenets/ExpenseListItem';

it('should render ExpenseListItem correctly', () => {
  const data = {
    id: '1',
    description: 'rent',
    amount: 500,
    createdAt: 5000
  };
  const wrapper = shallow(<ExpenseListItem {...data} />);
  expect(wrapper).toMatchSnapshot();
});
