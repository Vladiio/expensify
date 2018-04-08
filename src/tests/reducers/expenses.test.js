import moment from 'moment';

import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';


it('should setup state with default', () => {
  expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([]);
});

it('should add a new expense', () => {
  expect(
    expensesReducer(undefined, {
      type: 'ADD_EXPENSE',
      ...expenses[0]
    })
  ).toEqual([expenses[0]]);
});

it('should remove an expense by id', () => {
  expect(
    expensesReducer(expenses, {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    })
  ).toEqual([expenses[0], expenses[2]]);
});

it('should edit an expense by id', () => {
  const updates = {
    amount: 500
  };
  expect(
    expensesReducer(expenses, {
      type: 'EDIT_EXPENSE',
      id: expenses[1].id,
      updates
    })[1]
  ).toEqual({
    ...expenses[1],
    ...updates
  });
});
