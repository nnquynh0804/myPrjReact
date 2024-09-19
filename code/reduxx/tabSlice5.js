import { createSlice } from '@reduxjs/toolkit';

const tab4Slice = createSlice({
  name: 'tab5',
  initialState: {
    index: 0,
    routes: [
        { key: 'dsyeuthich', title: 'Danh sách yêu thích' },
        { key: 'thitruong', title: 'Thị trường' },
        { key: 'khampha', title: 'Khám phá' },
        { key: 'square', title: 'Square' },
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
