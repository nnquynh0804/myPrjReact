import { createSlice } from '@reduxjs/toolkit';

const tab1Slice = createSlice({
  name: 'tab1',
  initialState: {
    index: 0,
    routes: [
        { key: 'dsyeuthich', title: 'Danh sách yêu thích' },
        { key: 'phobien', title: 'Phổ biến' },
        { key: 'tanggia', title: 'Tăng giá' },
        { key: 'giamgia', title: 'Giảm giá' },
    ],
  },
  reducers: {
    setTab1Index: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setTab1Index } = tab1Slice.actions;

export default tab1Slice.reducer;
