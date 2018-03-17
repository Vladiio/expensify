const getVisibleExpenses = (
  expenses,
  {
    text,
    sortBy,
    startDate,
    endDate
  }
) => {
  const filteredExpenses = expenses.filter(({ description, createdAt }) => {
    const startDateMatch = typeof startDate !== 'number'
                           || createdAt >= startDate;

    const endDateMatch = typeof endDate !== 'number'
                         || createdAt <= endDate;
    const textMatch = description.toLowerCase().includes(text.toLowerCase());

   return startDateMatch && endDateMatch && textMatch;
  });

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