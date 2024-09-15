import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../LocalStorage";

const defaultState = {
  cartItems: [],
};

const persistedState = loadState()?.cart || defaultState;

export const cartSlice = createSlice({
  name: "cart",
  initialState: persistedState,
  reducers: {
    increment: (state, action) => {
      state.cartItems.push(action.payload);
    },
    decrement: (state, action) => {
      state.cartItems.pop(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { increment, decrement,removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
