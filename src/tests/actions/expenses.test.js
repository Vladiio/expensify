import {
  removeExpense,
  addExpense,
  editExpense
} from '../../actions/expenses';

it('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

it('should setup edit expense action object', () => {
  const updates = {
    description: 'test',
    note: 'test1',
    amount: 12,
    createdAt: 1
  };
  const action = editExpense('123abc', updates);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates
  });
});

it('should setup add a new expense action object with defaults', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
    id: expect.any(String)
  });
});

it('should setup add expense action object with provided values', () => {
  const expenseData = {
    type: 'ADD_EXPENSE',
    note: 'test',
    description: 'rent',
    amount: 1244,
    createdAt: 1000,
    id: expect.any(String)
  };
  const action = addExpense(expenseData);
  expect(action).toEqual(expenseData);
});
