import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {TYPEIC:"FontAwesome6", nameIC:"chart-simple", label:"863.7K"},
    { nameIC:"comment-text", label:"103"},
    { TYPEIC:"AntDesign", nameIC:"like1", label:"457"},
    { TYPEIC:"FontAwesome6", nameIC:"retweet", label:"8"},
    { nameIC:"share", label:"69"},
];
const btn = createSlice({
  name: 'price',
  initialState,
  reducers: {
    updateCoin: (state, action) => {
      const { index, nameIC, label } = action.payload;
      state[index] = { ...state[index], label,};
    },
  },
});

export const { updateCoin } = btn.actions;

export default btn.reducer;
