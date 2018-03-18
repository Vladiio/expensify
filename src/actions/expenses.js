import uuid from 'uuid';
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from './constants';

export const editExpense = (
  id,
  updates
) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: ADD_EXPENSE,
  id: uuid(),
  description,
  note,
  amount,
  createdAt
});

export const removeExpense = ({
  id
} = {}) => ({
  type: REMOVE_EXPENSE,
  id
});