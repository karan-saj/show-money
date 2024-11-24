import { configureStore } from '@reduxjs/toolkit';
import balanceSheetReducer from './balanceSheetSlice';

export const store = configureStore({
  reducer: {
    balanceSheet: balanceSheetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
