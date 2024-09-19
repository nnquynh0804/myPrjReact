import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    index: 0,
    routes: [
      { key: 'earn', title: 'Earn' },
      { key: 'giaodich', title: 'Giao dịch' },
      { key: 'launchpool', title: 'Launchpool' },
    ],
  },
  reducers: {
    setTabIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setTabIndex } = tabSlice.actions;

export default tabSlice.reducer;
