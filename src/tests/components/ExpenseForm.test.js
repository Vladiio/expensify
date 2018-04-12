import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../componenets/ExpenseForm';
import expenses from '../fixtures/expenses';

describe('ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);

  describe('render correctly', () => {
    it('should correctly render ExpenseForm', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ExpenseForm correctly with expense data', () => {
      const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('handle actions', () => {
    it('should render error for invalid form submission', () => {
      expect(wrapper).toMatchSnapshot();
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
      });
      expect(wrapper.state('error').length).toBeGreaterThan(0);
      expect(wrapper).toMatchSnapshot();
    });

    it('should set a new date on date change', () => {
      const date = moment(1000);
      wrapper
        .find('SingleDatePicker')
        .prop('onDateChange')(date)
      expect(wrapper.state('createdAt')).toEqual(date)
    });

    it('should set calendarFocused on focus change', () => {
      wrapper
        .find('SingleDatePicker')
        .prop('onFocusChange')({ focused: true });
      expect(wrapper.state('calendarFocused')).toBe(true)

      wrapper
        .find('SingleDatePicker')
        .prop('onFocusChange')({ focused: false });
      expect(wrapper.state('calendarFocused')).toBe(false)
    });

    it('should call onSubmit prop for valid form submission', () => {
      const onSubmitSpy = jest.fn();
      const wrapper = shallow(
        <ExpenseForm 
          expense={expenses[0]}
          onSubmit={onSubmitSpy}
        />
      )
       wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
      });
      expect(wrapper.state('error')).toBe('');
      expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
      })
    });

    it('should set description on input change', () => {
      const value = 'new description';
      wrapper
        .find('input')
        .at(0)
        .simulate('change', {
          target: {
            name: 'description',
            value
          }
        });
      expect(wrapper.state('description')).toBe(value);
    });

    it('should set note on textarea change', () => {
      const value = 'new note';
      wrapper.find('textarea').simulate('change', {
        target: {
          name: 'note',
          value
        }
      });
      expect(wrapper.state('note')).toBe(value);
    });

    it('should set amount on input change', () => {
      const value = '565.34';
      wrapper
        .find('input')
        .at(1)
        .simulate('change', {
          target: {
            name: 'amount',
            value
          }
        });
      expect(wrapper.state('amount')).toBe(value);
    });

    it('should not set invalid amount on input change', () => {
      const wrapper = shallow(<ExpenseForm />);
      const value = '12.124';
      wrapper
        .find('input')
        .at(1)
        .simulate('change', {
          target: {
            name: 'amount',
            value
          }
        });
      expect(wrapper.state('amount').length).toBe(0);
    });
  });
});
