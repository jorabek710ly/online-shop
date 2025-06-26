import { configureStore } from '@reduxjs/toolkit'
import wishlistSlice from "./features/wishlistSlice"
import cart from "./features/cart"

export const store = configureStore({
  reducer: {
    wishlistSlice,
    cart,
  },
})