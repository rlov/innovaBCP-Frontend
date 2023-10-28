import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    idToken: null,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.idToken = action.payload.idToken;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    signOut: state => {
      state.idToken = null;
      state.accessToken = null;
    },
    restoreToken: (state, action) => {
      state.idToken = action.payload.idToken;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const {signIn, signOut, restoreToken} = loginSlice.actions;
export default loginSlice.reducer;
