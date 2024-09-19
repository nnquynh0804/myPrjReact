// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../src/slice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});

export default store;

