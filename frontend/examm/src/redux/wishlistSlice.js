import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: 0,
}

export const productSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
  
  },
})

export const { } = productSlice.actions

export default productSlice.reducer
