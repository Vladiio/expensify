import { 
  SET_END_DATE,
  SET_START_DATE,
  SET_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE
} from './constants';

export const setEndDate = (
  date
) => ({
  type: SET_END_DATE,
  date
});

export const setStartDate = (
   date
) => ({
  type: SET_START_DATE,
  date
});

export const sortByDate = () => ({
  type: SORT_BY_DATE,
});

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

export const setFilter = ( text = '' ) => ({
  type: SET_FILTER,
  text
});