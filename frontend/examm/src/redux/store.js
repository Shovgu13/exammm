
import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./product"

export const store = configureStore({
  reducer: {
    counter: ProductReducer
  },
})