import moment from 'moment';

import filterReducer from '../../reducers/filters';
import getVisibleExpenses from '../../selectors/expenses';

const defaults = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

it('should initialize a state with defaults', () => {
  expect(filterReducer(undefined, { type: '@@INIT' })).toEqual(
    defaults
  );
});

it('should set end date', () => {
  const expected = {
    ...defaults,
    endDate: moment().add(3, 'days')
  };

  const after = filterReducer(defaults, {
    type: 'SET_END_DATE',
    date: moment().add(3, 'days')
  });

  expect(after).toEqual(expected);
});

it('should set start date', () => {
  const expected = {
    ...defaults,
    startDate: moment().subtract(3, 'days')
  };

  const result = filterReducer(defaults, {
    type: 'SET_START_DATE',
    date: moment().subtract(3, 'days')
  });
});

it('should set filter', () => {
  const text = 'filter';
  const expected = {
    ...defaults,
    text
  };

  expect(
    filterReducer(defaults, {
      type: 'SET_FILTER',
      text
    })
  ).toEqual(expected);
});

it('should set sort to date', () => {
  const before = {
    ...defaults,
    sortBy: 'amount'
  };

  expect(
    filterReducer(before, {
      type: 'SORT_BY_DATE'
    })
  ).toEqual(defaults);
});

it('should set sort to amount', () => {
  expect(
    filterReducer(defaults, { type: 'SORT_BY_AMOUNT' })
  ).toEqual({
    ...defaults,
    sortBy: 'amount'
  });
});
