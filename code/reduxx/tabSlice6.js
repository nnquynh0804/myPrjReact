import { createSlice } from '@reduxjs/toolkit';

const tab5Slice = createSlice({
  name: 'tab6',
  initialState: {
    index: 0,
    routes: [
        { key: 'tsan', title: 'Tài sản' },
        { key: 'giaongay', title: 'Giao ngay' },
        { key: 'USDM', title: 'USDⓈ-M' },
        { key: 'COIN', title: 'COIN-M' },
        { key: 'quyenchon', title: 'Quyền chọn' },
    ],
  },
  reducers: {
    setTabIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setTabIndex } = tab5Slice.actions;

export default tab5Slice.reducer;
