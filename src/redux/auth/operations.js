import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import axios from "axios";

export const swaggerApi = axios.create({
  baseURL: "https://wallet.b.goit.study/api/",
});

const setToken = (token) => {
  swaggerApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  swaggerApi.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, { rejectWithValue }) => {
    try {
      const updatedCredentials = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      };

      const { data } = await swaggerApi.post(
        "auth/sign-up",
        updatedCredentials
      );

      setToken(data.token);

      toast.success(`Welcome, ${data.user.username}`);

      return data;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          toast.error(`Validation error: please check your data`);
          break;
        case 409:
          toast.error(`Error: User with such email already exists`);
          break;
        default:
          break;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.post("auth/sign-in", credentials);

      setToken(data.token);

      toast.success(`Hello, ${data.user.username}`);

      return data;
    } catch (error) {
      toast.error(`Email or password is not valid`);

      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "logout",
  async (_, { rejectWithValue, getState }) => {
    try {
      await swaggerApi.delete("auth/sign-out");
      clearToken();

      toast.info(`Bye, ${getState().auth.user.username} `);
    } catch (error) {
      switch (error.response.status) {
        case 401:
          toast.error("Bearer auth failed. You are not authorized to log out.");
          break;
        default:
          toast.warning(`Something went wrong. Please try again later.`);
          break;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "refresh",
  async (_, { rejectWithValue, getState }) => {
    const savedToken = getState().auth.token;

    if (!savedToken) {
      return rejectWithValue("token was not found");
    }
    try {
      setToken(savedToken);
      const { data } = await swaggerApi.get("/users/current");

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
