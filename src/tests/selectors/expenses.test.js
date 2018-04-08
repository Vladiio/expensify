import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';

import expenses from '../fixtures/expenses';


it('should filter expenses by description', () => {
  const filters = {
    text: 'c',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[1]
  ]);
});

it('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };

  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0]
  ]);
});

it('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };

  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[0],
    expenses[1]
  ]);
});

it('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0],
    expenses[1]
  ]);
});

it('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  expect(
    getVisibleExpenses(expenses, filters)
  ).toEqual([ expenses[1], expenses[2], expenses[0] ])
});