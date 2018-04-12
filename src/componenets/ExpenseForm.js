import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    const { expense } = props;
    this.state = {
      description: expense ? expense.description : '',
      note: expense ? expense.note : '',
      amount: expense ? expense.amount / 100 : '',
      createdAt: expense ? moment(expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onSubmitForm = event => {
    event.preventDefault();
    const { description, amount } = this.state;
    let error = '';

    if (!description || !amount) {
      error = 'Please provide description and amount';
    }
    this.setState({ error });
    if (error) {
      return;
    }

    this.props.onSubmit({
      description,
      amount: parseFloat(amount, 10) * 100,
      note: this.state.note,
      createdAt: this.state.createdAt.valueOf()
    });
  };

  onInputChange = event => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    if (
      fieldName === 'amount' &&
      (fieldValue && !fieldValue.match(/^\d{1,}(\.\d{0,2})?$/))
    ) {
      return;
    }

    this.setState({
      [fieldName]: fieldValue
    });
  };

  onDateChange = createdAt => {
    createdAt &&
      this.setState({
        createdAt
      });
  };

  onFocusChange = ({ focused }) => {
    this.setState({
      calendarFocused: focused
    });
  };

  render() {
    return (
      <div>
        {this.state.error && <h3>{this.state.error}</h3>}
        ExpenseForm
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="description"
            autoFocus
            name="description"
            value={this.state.description}
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.onInputChange}
            placeholder="Amount"
          />{' '}
          <br />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            name="note"
            value={this.state.note}
            onChange={this.onInputChange}
            placeholder="Add a note for your expense (optional)"
          />
          <button>Add expense</button>
        </form>
      </div>
    );
  }
}
