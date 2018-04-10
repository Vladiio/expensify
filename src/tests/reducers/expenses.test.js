import moment from 'moment';

import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';

it('should setup state with default', () => {
  expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([]);
});

it('should add a new expense', () => {
  const expense = {
    id: '4',
    description: 'new one',
    note: '',
    amount: 666,
    createdAt: 1000
  };
  expect(
    expensesReducer(expenses, {
      type: 'ADD_EXPENSE',
      ...expense
    })
  ).toEqual([
    ...expenses,
    expense
  ]);
});

it('should remove an expense by id', () => {
  expect(
    expensesReducer(expenses, {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    })
  ).toEqual([expenses[0], expenses[2]]);
});

it('should not remove an expense if id not found', () => {
  expect(
    expensesReducer(expenses, {
      type: 'REMOVE_EXPENSE',
      id: 'fancyId'
    })
  ).toEqual(expenses);
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

it('should not edit any expenses if id not found', () => {
  expect(
    expensesReducer(expenses, {
      type: 'EDIT_EXPENSE',
      id: 'fancyId'
    })
  ).toEqual(expenses)
})
