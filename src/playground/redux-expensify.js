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
          createdAt: action.createdAt
        }
      ];
    
    case REMOVE_EXPENSE:
      return state.filter(expense => (
        expense.id !== action.id
      ));
    case EDIT_EXPENSE:
      const { updates, id } = action;
      return state.map(expense => {
        if (expense.id === id) {
          return {
            ...expense,
            ...updates
          };
        return expense
        }
      });
    default:
      return state;
  }
};

const filterReducerInitial = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (
  state = filterReducerInitial,
  action
) => {
  switch (action.type) {
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.date
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.date
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      };
    case SET_FILTER:
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

// Filtering
const getVisibleExpenses = (
  expenses,
  {
    text,
    sortBy,
    startDate,
    endDate
  }
) => {
  const filteredExpenses = expenses.filter(({ description, createdAt }) => {
    const startDateMatch = typeof startDate !== 'number'
                           || createdAt >= startDate;

    const endDateMatch = typeof endDate !== 'number'
                         || createdAt <= endDate;
    const textMatch = description.toLowerCase().includes(text.toLowerCase());

   return startDateMatch && endDateMatch && textMatch;
  });

  return filteredExpenses.sort((expenseOne, expenseTwo) => {
    switch (sortBy) {
      case 'date':
        return expenseTwo.createdAt - expenseOne.createdAt;
      
      case 'amount':
        return expenseTwo.amount - expenseOne.amount;
      default:
        return 0;
    }
  });
};

// CONSTANTS

const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const EDIT_EXPENSE = 'EDIT_EXPENSE';

const SET_FILTER = 'SET_FILTER';
const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';
const SORT_BY_DATE = 'SORT_BY_DATE';
const SET_END_DATE = 'SET_END_DATE';
const SET_START_DATE = 'SET_START_DATE';

// ACTION GENERATORS

const setEndDate = (
  date
) => ({
  type: SET_END_DATE,
  date
});

const setStartDate = (
   date
) => ({
  type: SET_START_DATE,
  date
});

const sortByDate = () => ({
  type: SORT_BY_DATE,
});

const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

const setFilter = ( text = '' ) => ({
  type: SET_FILTER,
  text
});

const editExpense = (
  id,
  updates
) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});

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
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(
    state.expenses,
    state.filter
  );
  console.log(visibleExpenses);  
});

const expenseOne = store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 10,
    createdAt: -11000
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: 'Coffee',
    amount: 50,
    createdAt: -1000
  })
);

console.log('SORTING');

store.dispatch(sortByAmount());


// store.dispatch(
//   removeExpense({ id: expenseOne.id })
// );

// store.dispatch(
//   editExpense(
//     expenseTwo.id,
//     { amount: 500 }
//    )
// );

// store.dispatch(
//   setFilter('eee')
// );


// store.dispatch(
//   setStartDate(-1000)
// )
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(
//   setStartDate(new Date())
// );
// store.dispatch(
//   setStartDate()
// );
// store.dispatch(
//   setEndDate(new Date())
// );

