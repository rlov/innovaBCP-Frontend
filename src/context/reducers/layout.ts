import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    statusBarHeight: 0,
  },
  reducers: {
    setStatusBarHeight: (state, action) => {
      state.statusBarHeight = action.payload.statusBarHeight;
    },
  },
});

export const { setStatusBarHeight } = layoutSlice.actions;
export default layoutSlice.reducer;
