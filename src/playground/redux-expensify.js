import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// REDUCERS
const expensesReducerInitial = [];

const expensesReducer = (
  state = expensesReducerInitial,
  action
) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        {
          description: action.description,
          id: action.id,
          note: action.note,
          amount: action.amount,
          createdAt: new Date()
        }
      ];
    
    case REMOVE_EXPENSE:
      return state.filter(expense => (
        expense.id !== action.id
      ));
    default:
      return state;
  }
};

const filterReducerInitial = {
  text: '',
  sortBy: 'day',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (
  state = filterReducerInitial,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

// CONSTANTS

const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

// ACTION GENERATORS

const addExpense = ({
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

const removeExpense = ({
  id
} = {}) => ({
  type: REMOVE_EXPENSE,
  id
});

// STORE

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

const expenseOne = store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 100
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: 'Coffee',
    amount: 50
  })
);


store.dispatch(
  removeExpense({id: expenseOne.id})
);