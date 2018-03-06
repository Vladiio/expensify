import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard componenet
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense componenet
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help componenets
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit componenet
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/edit" component={EditExpensePage} />
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));