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
    saveRemainingCats(state, action: PayloadAction<Cats[]>) {
      state.remainingCats = action.payload;
    },
    incrementPage(state) {
      state.page += 1;
    },
    toggleFavorite(state, action: PayloadAction<Cats>) {
      const cat = action.payload;
      const isFavorite = state.favorites.some((fav) => fav.id === cat.id);
      if (isFavorite) {
        state.favorites = state.favorites.filter((fav) => fav.id !== cat.id);
      } else {
        state.favorites.push(cat);
      }
    },
  },
});

export const {
  fetchCatsStart,
  fetchCatsSuccess,
  fetchCatsFailure,
  saveRemainingCats,
  incrementPage,
  toggleFavorite
} = catsSlice.actions;
export default catsSlice.reducer;
