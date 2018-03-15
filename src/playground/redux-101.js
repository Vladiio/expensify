import { createStore } from 'redux';

// CONSTANTS
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const RESENT_COUNT = 'RESET_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const SET_VALUE = 'SET_VALUE';

// ACTIONS
const incrementCount = (
  incrementBy = 1
) => ({
  type: INCREMENT_COUNT,
  incrementBy
});

const resetCount = {
  type: RESENT_COUNT
};

const decrementCount = (
  decrementBy = 1
) => ({
  type: DECREMENT_COUNT,
  decrementBy
});

const setValue = (
  value = 0
) => ({
  type: SET_VALUE,
  value
});

// REDUCERS
const initialState = { count: 0 };

const rootReducer = (
  state = initialState,
  action
) => {
  console.log('rootReducer is running...');

  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        count: state.count + action.incrementBy
      };
    case RESENT_COUNT:
      return {
        count: 0
      };
    case DECREMENT_COUNT:
      return {
        count: state.count - action.decrementBy
      }
    case SET_VALUE:
      return {
        count: action.value
      };
    default:
      return state
  }
};
 
const store = createStore(rootReducer);

const unsubsribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount(5));
store.dispatch(resetCount);
store.dispatch(decrementCount(6));
store.dispatch(setValue(101));