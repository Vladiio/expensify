import moment from 'moment';
import * as filters from '../../actions/filters';

it('should generate a set end date action', () => {
  const endDate = moment(0);
  expect(filters.setEndDate(endDate)).toEqual({
    type: 'SET_END_DATE',
    date: endDate
  });
});

it('should generate a set start date action', () => {
  const date = moment(5000);
  expect(filters.setStartDate(date)).toEqual({
    type: 'SET_START_DATE',
    date
  });
});

it('should generate a sort by date action', () => {
  expect(filters.sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

it('should generate a sort by amount action', () => {
  expect(filters.sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

it('should generate a set filter action with provided filter', () => {
  const text = 'test';
  expect(filters.setFilter(text)).toEqual({
    type: 'SET_FILTER',
    text
  });
});

it('should generate a set filter action with default filter', () => {
  expect(filters.setFilter()).toEqual({
    type: 'SET_FILTER',
    text: ''
  });
});
