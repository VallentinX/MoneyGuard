import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.b.goit.study/api';

export const requestTransactionCategories = createAsyncThunk(
  'transactionCategories/requestTransactionCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/transaction-categories');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const requestTransactions = createAsyncThunk(
  'transactions/requestTransactions',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/transactions');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/transactions/${taskId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
