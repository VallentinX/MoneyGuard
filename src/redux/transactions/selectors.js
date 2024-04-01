import { createSelector } from 'reselect';

export const selectTransactions = state =>
  state.transactions.transactions.items;

export const selectLoading = state => state.transactions.transactions.isLoading;

export const selectError = state => state.transactions.transactions.error;

export const selectCategories = state =>
  state.transactions.transactions.categories;

export const selectAllCategories = createSelector(
  [selectCategories],
  categories => {
    return categories;
  }
);

export const selectFIltered = (state, sortCriteria) => {
  const transactions = selectTransactions(state);
  const categories = selectCategories(state);

  const sortedTransactions = [...transactions];
  switch (sortCriteria.value) {
    case 'date':
      sortedTransactions.sort((a, b) => {
        const dateA = new Date(a.transactionDate);
        const dateB = new Date(b.transactionDate);

        return sortCriteria.isReverse ? dateA - dateB : dateB - dateA;
      });

      break;
    case 'amount':
      sortedTransactions.sort((a, b) => {
        return sortCriteria.isReverse
          ? b.amount - a.amount
          : a.amount - b.amount;
      });

      break;
    case 'category':
      sortedTransactions.sort((a, b) => {
        const categoryA =
          categories.find(cat => cat.id === a.categoryId)?.name || '';

        const categoryB =
          categories.find(cat => cat.id === b.categoryId)?.name || '';

        return sortCriteria.isReverse
          ? categoryB.localeCompare(categoryA)
          : categoryA.localeCompare(categoryB);
      });

      break;
    default:
      return sortedTransactions.sort(
        (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
      );
  }

  return sortedTransactions;
};

export const selectCategoriesSummary = state =>
  state.transactions.summary.categoriesSummary;

export const selectIncomeSummary = state =>
  state.transactions.summary.incomeSummary;

export const selectExpenseSummary = state =>
  state.transactions.summary.expenseSummary;

export const selectPeriodTotal = state =>
  state.transactions.summary.periodTotal;

export const selectYear = state => state.transactions.summary.year;

export const selectMonth = state => state.transactions.summary.month;
