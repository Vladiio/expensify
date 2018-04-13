import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../componenets/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let wrapper, spies;

beforeEach(() => {
  spies = {
    setTextFilter: jest.fn(),
    setOrderBy: jest.fn(),
    setStartDate: jest.fn(),
    setEndDate: jest.fn()
  };
  wrapper = shallow(
    <ExpenseListFilters {...spies} filter={filters} />
  );
});

it('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filter: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

it('should handle dates change', () => {
  const { startDate, endDate } = altFilters;
  wrapper
    .find('DateRangePicker')
    .prop('onDatesChange')({ startDate, endDate });
  expect(spies.setStartDate)
    .toHaveBeenLastCalledWith(startDate);
  expect(spies.setEndDate)
    .toHaveBeenLastCalledWith(endDate);
});

it('should set focusedInput on focus change', () => {
  let focusedInput = 'startDate';
  wrapper
    .find('DateRangePicker')
    .prop('onFocusChange')(focusedInput);
  expect(wrapper.state('focusedInput')).toBe(focusedInput);

  focusedInput = 'endDate';
  wrapper
    .find('DateRangePicker')
    .prop('onFocusChange')(focusedInput);
  expect(wrapper.state('focusedInput')).toBe(focusedInput)
});

it('should handle text change', () => {
  wrapper
    .find('input[type="text"]')
    .simulate('change', {
      target: {
        value: altFilters.text
      }
    });
  expect(spies.setTextFilter)
    .toHaveBeenLastCalledWith(altFilters.text)
});

it('should handle sort change', () => {
  wrapper
    .find('select')
    .simulate('change', {
      target: {
        value: altFilters.sortBy
      }
    });
  expect(spies.setOrderBy)
    .toHaveBeenLastCalledWith(altFilters.sortBy)
})