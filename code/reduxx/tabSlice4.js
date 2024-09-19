import { createSlice } from '@reduxjs/toolkit';

const tab4Slice = createSlice({
  name: 'tab4',
  initialState: {
    index: 0,
    routes: [
      { key: 'khampha', title: 'Khám phá' },
      { key: 'dangtheodoi', title: 'Đang theo dõi' },
      { key: 'thongbao', title: 'Thông báo' },
      { key: 'tintuc', title: 'Tin Tức' },
    ],
  },
  reducers: {
    setTabIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setTabIndex } = tab4Slice.actions;

export default tab4Slice.reducer;
