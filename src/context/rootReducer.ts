import { combineReducers } from '@reduxjs/toolkit';
import loginSlice from './reducers/login';
import layoutSlice from './reducers/layout';

const rootReducer = combineReducers({
  login: loginSlice,
  layout: layoutSlice,
});

export default rootReducer;
