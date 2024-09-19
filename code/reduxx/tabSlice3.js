import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
  name: 'tab3',
  initialState: {
    index: 0,
    routes: [
        { key: 'duocBV', title: 'Được bảo vệ' },
        { key: 'loiSuatCao', title: 'Lợi suất cao' },
        { key: 'dauTuTuDong', title: 'Đầu tư tự động' },
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
