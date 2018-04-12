import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../componenets/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, addExpense, editExpense, removeExpense;

beforeEach(() => {
  history = {
    push: jest.fn()
  };
  editExpense = jest.fn();
  removeExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />
  );
});

it('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle form submission', () => {
  const updates = {
    note: 'to remember'
  };
  wrapper.find('ExpenseForm').prop('onSubmit')(updates);
  expect(editExpense).toHaveBeenLastCalledWith(
    expenses[0].id,
    updates
  );
});

it('should handle remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense)
    .toHaveBeenLastCalledWith(expenses[0].id)
  expect(history.push)
    .toHaveBeenLastCalledWith('/')
});
