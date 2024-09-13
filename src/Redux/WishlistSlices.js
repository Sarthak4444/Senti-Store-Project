import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: 0
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    increment: (state) => {

      state.wishlist += 1
    },
    decrement: (state) => {
      state.wishlist -= 1
    },

  },
})

export const { increment, decrement } = wishlistSlice.actions

export default wishlistSlice.reducer