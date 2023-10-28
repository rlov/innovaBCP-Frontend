import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    statusBarHeight: 0,
    hasPitchIn: false,
  },
  reducers: {
    setStatusBarHeight: (state, action) => {
      state.statusBarHeight = action.payload.statusBarHeight;
    },
    setHasPitchIn: (state, action) => {
      state.hasPitchIn = action.payload.hasPitchIn;
    },
  },
});

export const { setStatusBarHeight, setHasPitchIn } = layoutSlice.actions;
export default layoutSlice.reducer;
