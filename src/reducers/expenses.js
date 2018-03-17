import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../actions/constants';

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

export default expensesReducer;