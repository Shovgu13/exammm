import { createSlice } from '@reduxjs/toolkit'
import { Base_url } from '../services/Base_url'

const initialState = {
  product: [
    
  ],
}

export const productSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addAllData : (state,action)=>{
state.product=state.payload
    }
   
  },
})

export const { addAllData } = productSlice.actions

export default productSlice.reducer