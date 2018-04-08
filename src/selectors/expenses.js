import moment from 'moment';

const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  const filteredExpenses = expenses.filter(
    ({ description, createdAt }) => {
      const createdAtMoment = moment(createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      const textMatch = description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    }
  );

  return filteredExpenses.sort((expenseOne, expenseTwo) => {
    switch (sortBy) {
      case 'date':
        return expenseTwo.createdAt - expenseOne.createdAt;

      case 'amount':
        return expenseTwo.amount - expenseOne.amount;
      default:
        return 0;
    }
  });
};

export default getVisibleExpenses;
