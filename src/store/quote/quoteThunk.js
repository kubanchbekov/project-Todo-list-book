import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQuotes = createAsyncThunk(
  "quote/get",
  async (customFatch, { rejectWithValue }) => {
    try {
      const data = await customFatch("quotes");

      const newData = [];

      for (let key in data) {
        newData.push({
          id: key,
          ...data[key],
        });
      }
      return newData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getQuoteById = createAsyncThunk(
  "quote/getById",
  async ({ castimFetch, id }, { rejectWithValue }) => {
    try {
      const data = await castimFetch(`quotes/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addQuote = createAsyncThunk(
  "quote/post",
  async (
    { castimFetch, quotesData, navigate },
    { rejectWithValue, dispatch }
  ) => {
    try {
      await castimFetch("quotes", "POST", quotesData);
      dispatch(getQuotes(castimFetch));
      navigate("/quotes");
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
