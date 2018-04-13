import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate
} from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends Component {
  state = {
    focusedInput: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = focusedInput => {
    this.setState({ focusedInput });
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = e => {
    this.props.setOrderBy(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filter.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filter.sortBy}
          onChange={this.onSortChange}
        >
          <option defaultValue="date">date</option>
          <option defaultValue="amount">amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filter.startDate}
          endDate={this.props.filter.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          startDateId="startDate1"
          endDateId="enddate2"
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ filter }) => ({
  filter
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setFilter(text)),
  setStartDate: date => dispatch(setStartDate(date)),
  setEndDate: date => dispatch(setEndDate(date)),
  setOrderBy: orderBy => {
    switch (orderBy) {
      case 'amount':
        dispatch(sortByAmount());
        break;
      default:
        dispatch(sortByDate());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ExpenseListFilters
);
