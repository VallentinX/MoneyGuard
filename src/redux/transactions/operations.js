import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { swaggerApi } from 'redux/auth/operations';

export const fetchTransactionsThunk = createAsyncThunk(
  'fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.get('transactions');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (body, { rejectWithValue }) => {
    const data = {
      transactionDate: body.transactionDate,
      type: body.type,
      categoryId: body.categoryId,
      comment: body.comment,
      amount: body.amount,
    };
    try {
      const res = await swaggerApi.post('transactions', data);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await swaggerApi.delete(`transactions/${id}`);

      const { data } = await swaggerApi.get('/users/current');
      const newData = { data, id };

      toast.success('Transaction delete success!');

      return newData;
    } catch (error) {
      toast.error(`Error! ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransactionThunk = createAsyncThunk(
  'updateTransaction',
  async (body, thunkApi) => {
    const newBody = {
      transactionDate: body.transactionDate,
      type: body.type,
      comment: body.comment,
      amount: body.amount,
      categoryId: body.categoryId,
    };
    try {
      const { data } = await swaggerApi.patch(
        `transactions/${body.id}`,
        newBody
      );
      const { data: freshData } = await swaggerApi.get('/users/current');

      toast.success('Edit completed!');

      const newData = { data, freshData };

      return newData;
    } catch (error) {
      toast.error(`Your data is not valid, check your data`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactionCategory = createAsyncThunk(
  'transactionCategory',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.get('transaction-categories');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTransactionsSummary = createAsyncThunk(
  'transactionsSummary',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.get(
        `transactions-summary?month=${month}&year=${year}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
