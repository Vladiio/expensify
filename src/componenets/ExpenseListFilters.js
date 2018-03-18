import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';



class ExpenseListFilters extends Component {

  state = {
    focusedInput: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (focusedInput) => {
    this.setState({ focusedInput });
  };

  render() {
    return (
      <div>
        <input 
        type="text"
          value={this.props.filter.text}
          onChange={(e) => this.props.onFilterChange(e.target.value)}/>
        <select
          value={this.props.filter.sortBy} 
          onChange={(e) => {this.props.onOrderChange(e.target.value)}}>
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
          startDateId='startDate1'
          endDateId='enddate2'
          showClearDates={true}
        />
      </div>
    );

  }
}

const mapStateToProps = ({ filter }) => ({
  filter
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (text) => {
    dispatch(setFilter(text))
  },
  onOrderChange: (orderBy) => {
    switch (orderBy) {
      case 'amount':
        dispatch(sortByAmount());
        break;
      default:
        dispatch(sortByDate());
    }
  },
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);