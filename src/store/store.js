import { configureStore } from "@reduxjs/toolkit";
import { quoteSlice } from "./quote/quoteSlice";

export const store = configureStore({
  reducer: {
    [quoteSlice.name]: quoteSlice.reducer,
  },
});
