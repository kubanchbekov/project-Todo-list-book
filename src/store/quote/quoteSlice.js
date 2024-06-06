import { createSlice } from "@reduxjs/toolkit";
import { getQuotes, getQuoteById } from "./quoteThunk";

const initialState = {
  quotes: [],
  quote: {},
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    addQuote: (state, action) => {
      state.quotes.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getQuotes.fulfilled, (state, action) => {
        state.quotes = action.payload;
      })
      .addCase(getQuoteById.fulfilled, (state, action) => {
        state.quote = action.payload;
      });
  },
});

export const quoteActions = quoteSlice.actions;
