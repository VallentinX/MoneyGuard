import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  fetchTransactionCategory,
  fetchTransactionsSummary,
  fetchTransactionsThunk,
  updateTransactionThunk,
} from './operations';

const initialState = {
  transactions: {
    items: [],
    categories: [],
    isLoading: false,
    error: null,
  },
  summary: {
    categoriesSummary: [
      {
        name: '',
        type: '',
        total: 0,
      },
    ],
    incomeSummary: 0,
    expenseSummary: 0,
    periodTotal: 0,
    year: null,
    month: null,
  },
};
export const slice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTransactionsThunk.fulfilled, (state, { payload }) => {
        state.transactions.items = payload;
      })
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactions.items.push(payload);
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactions.items = state.transactions.items.filter(
          transaction => transaction.id !== payload.id
        );
      })
      .addCase(updateTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactions.items = state.transactions.items.map(transaction =>
          transaction.id === payload.data.id ? payload.data : transaction
        );
      })
      .addCase(fetchTransactionCategory.fulfilled, (state, { payload }) => {
        state.transactions.categories = payload;
      })
      .addCase(fetchTransactionsSummary.fulfilled, (state, { payload }) => {
        state.summary = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.fulfilled,
          deleteTransactionThunk.fulfilled,
          addTransactionThunk.fulfilled,
          fetchTransactionCategory.fulfilled
        ),
        (state, { payload }) => {
          state.transactions.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.pending,
          deleteTransactionThunk.pending,
          addTransactionThunk.pending,
          fetchTransactionCategory.pending,
          fetchTransactionsSummary.pending
        ),
        (state, { payload }) => {
          state.transactions.isLoading = true;
          state.transactions.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.rejected,
          deleteTransactionThunk.rejected,
          addTransactionThunk.rejected,
          fetchTransactionCategory.rejected,
          fetchTransactionsSummary.rejected
        ),
        (state, { payload }) => {
          state.transactions.error = payload;
          state.transactions.isLoading = false;
        }
      );
  },
});

export const transactionReducer = slice.reducer;
