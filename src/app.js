import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
  addExpense({ 
    description: 'Water bill',
    amount: 4500
  })
);
store.dispatch(
  addExpense({ 
    description: 'Gas bill',
    createdAt: 1000
  })
);
store.dispatch(
  addExpense({ 
    description: 'Rent',
    amount: 109500
  })
);

const { expenses, filter } = store.getState();

console.log(
  getVisibleExpenses(expenses, filter)
);


ReactDOM.render(
  <Provider store={store}>  
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);