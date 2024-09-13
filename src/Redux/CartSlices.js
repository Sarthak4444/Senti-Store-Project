import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: 0,
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {

      state.cart += 1
      state.cartItems.push(action.payload)
    },
    decrement: (state, action) => {
      
      state.cart -= 1
      state.cartItems = state.cartItems.filter(item => item !== action.payload)
    },

  },
})

export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer