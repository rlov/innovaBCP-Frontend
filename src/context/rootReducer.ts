import {combineReducers} from '@reduxjs/toolkit';
import loginSlice from './reducers/login';

const rootReducer = combineReducers({
  login: loginSlice,
});

export default rootReducer;
