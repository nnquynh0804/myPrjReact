// ./slice.js
import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    name:'',
    accountBalance:0
  },
  reducers: {
    ReName: (state, action) => {
      state.name=action.payload;
    },
  recharge:(state,action) =>{
    if (typeof state.accountBalance === 'number' && typeof action.payload === 'number') {
      state.accountBalance = action.payload;
  } else {
      console.error('Invalid data type for accountBalance or payload');
  }
  }
  },
});

export const { ReName,recharge } = accountSlice.actions;
export default accountSlice.reducer;
