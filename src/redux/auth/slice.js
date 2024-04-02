import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

import {
  addTransactionThunk,
  deleteTransactionThunk,
  updateTransactionThunk,
} from '../transactions/operations';

const initialState = {
  user: {
    email: '',
    password: '',
  },
  balance: 0,
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isRefresh: false,
};

export const slice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return (state = initialState);
      })
      .addCase(refreshThunk.pending, (state, { payload }) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isRefresh = false;
        state.isLoggedIn = true;
        state.user.email = payload.email;
        state.balance = payload.balance;
      })
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.balanceAfter;
      })
      .addCase(updateTransactionThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.freshData.balance;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.data.balance;
      })
      .addMatcher(
        isAnyOf(loginThunk.pending, registerThunk.pending, state => {
          state.isLoading = true;
        })
      )
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.balance = payload.user.balance;
          state.token = payload.token;
          state.isLoading = false;
          state.isLoggedIn = true;
        }
      );
  },
});

export const authReducer = slice.reducer;
