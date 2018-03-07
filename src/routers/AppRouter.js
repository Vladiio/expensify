import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../componenets/Header';
import NotFoundPage from '../componenets/NotFoundPage';
import EditExpensePage from '../componenets/EditExpensePage';
import HelpPage from '../componenets/HelpPage';
import AddExpensePage from '../componenets/AddExpensePage';
import ExpenseDashboardPage from '../componenets/ExponseDashboardPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;