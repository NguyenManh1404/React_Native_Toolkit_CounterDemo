import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      if (action.payload > 100) {
        console.log("The number is so big !");
      } else {
        state.count += action.payload
      }

    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer