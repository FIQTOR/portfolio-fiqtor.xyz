'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface CounterNavState {
  pathNameWithHash: string;
}

const initialState: CounterNavState = {
  pathNameWithHash: typeof window !== 'undefined'
  ? window.location.pathname + window.location.hash
  : '',
}

export const counterSlice = createSlice({
  name: 'navState',
  initialState,
  reducers: {
    setPathNameWithHash: (state, action) => {
      state.pathNameWithHash = action.payload;
    }
  }
})

export const { setPathNameWithHash } = counterSlice.actions;

export default counterSlice.reducer;