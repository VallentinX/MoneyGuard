import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactionsSlice';
import { transactionCategoriesReducer } from './transactionCategoriesSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    transactionCategories: transactionCategoriesReducer,
  },
});
