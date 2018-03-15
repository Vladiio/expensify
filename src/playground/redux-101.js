import { createStore } from 'redux';


// CONSTANTS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const SET_VALUE = 'SET_VALUE';


// ACTION GENERATORS
const incrementCounter = ({
  incrementBy = 1
} = {}) => ({
  type: INCREMENT,
  incrementBy
});

const decrementCounter = ({
  decrementBy = 1
}= {}) => ({
  type: DECREMENT,
  decrementBy
});

const resetCounter = () => ({
  type: RESET
});

const setCounter = ({
  value = 0
} = {}) => ({
  type: SET_VALUE,
  value 
});

// REDUCER
const initialState = { count: 0 };

const rootReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.incrementBy
      };
    case DECREMENT:
      return {
        count: state.count - action.decrementBy
      };
    case RESET:
      return {
        count: 0
      };
    case SET_VALUE:
      return {
        count: action.value
      };
    default:
      return state;
  }
};


const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCounter({ incrementBy: 5}));
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
store.dispatch(setCounter({ value: 101 }));
