import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    <ul>
    {
      props.expenses.map(
        expense => <ExpenseListItem key={expense.id} {...expense}/>
      )
    }
    </ul>
  </div>
);

const mapStateToProps = ({
  expenses,
  filter
}) => {
  return {

    expenses: selectExpenses(expenses, filter)
  }
};

export default connect(
  mapStateToProps
)(ExpenseList);