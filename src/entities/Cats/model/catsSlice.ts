import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "../lib/constants";
import { Cats } from "../lib/types";

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    fetchCatsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCatsSuccess(state, action: PayloadAction<Cats[]>) {
      state.items = [...state.items, ...action.payload];
      state.loading = false;
    },
    fetchCatsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    incrementPage(state) {
        state.page += 1; 
      },
  },
});

export const { fetchCatsStart, fetchCatsSuccess, fetchCatsFailure, incrementPage } = catsSlice.actions;
export default catsSlice.reducer;
