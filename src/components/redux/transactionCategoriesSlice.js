import { createSlice } from '@reduxjs/toolkit';
import { requestTransactionCategories } from './operations';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const transactionCategoriesSlice = createSlice({
  name: 'transactionCategories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(requestTransactionCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(requestTransactionCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(requestTransactionCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const transactionCategoriesReducer = transactionCategoriesSlice.reducer;
