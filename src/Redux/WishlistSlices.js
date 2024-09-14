import { createSlice } from "@reduxjs/toolkit";
import { loadState } from '../LocalStorage'; 

const defaultState = {
  wishlistItems: [],
};

const persistedState = loadState()?.wishlist || defaultState; 

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: persistedState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
