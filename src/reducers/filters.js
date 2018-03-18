import moment from 'moment';

import { 
  SET_END_DATE,
  SET_START_DATE,
  SET_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE
} from '../actions/constants';

const filterReducerInitial = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
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

export default filterReducer;