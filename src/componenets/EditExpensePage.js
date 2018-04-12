import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

import { removeExpense, editExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onFormSubmit = updates => {
    const { editExpense, expense } = this.props;
    editExpense(expense.id, updates);
  };

  onButtonClick = () => {
    const { removeExpense, expense, history } = this.props;
    removeExpense(expense.id);
    history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onFormSubmit}
        />
        <button onClick={this.onButtonClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  expense: state.expenses.find(
    expense => expense.id === ownProps.match.params.id
  )
});

const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: id => dispatch(removeExpense({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  EditExpensePage
);
