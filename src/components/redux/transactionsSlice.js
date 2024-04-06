import { createSlice } from '@reduxjs/toolkit';
import { deleteTransaction, requestTransactions } from './operations';

const initialState = {
  list: [
    {
      id: '1',
      transactionDate: '04.01.23',
      type: 'EXPENSE',
      categoryId: 'other',
      comment: 'gift for your wife',
      amount: 300,
    },
    {
      id: '2',
      transactionDate: '05.01.23',
      type: 'INCOME',
      categoryId: 'income',
      comment: 'january bonus',
      amount: 8000,
    },
    {
      id: '3',
      transactionDate: '07.01.23',
      type: 'EXPENSE',
      categoryId: 'car',
      comment: 'oil',
      amount: 1000,
    },
    {
      id: '4',
      transactionDate: '07.01.23',
      type: 'EXPENSE',
      categoryId: 'products',
      comment: 'vegetables for the week',
      amount: 280,
    },
    {
      id: '5',
      transactionDate: '07.01.23',
      type: 'INCOME',
      categoryId: 'income',
      comment: 'gift',
      amount: 1000,
    },
  ],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(requestTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(requestTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(requestTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const transactionIndex = state.list.findIndex(
          transaction => transaction.id === action.payload.id
        );
        state.list.splice(transactionIndex, 1);
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
