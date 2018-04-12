import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../componenets/AddExpensePage';
import expenses from '../fixtures/expenses';


let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage onSubmit={onSubmit} history={history} />
  );
})

it('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
