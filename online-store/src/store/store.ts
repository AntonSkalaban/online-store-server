import { configureStore } from '@reduxjs/toolkit';
import filterValuesSlice from './filterValuesSlice';

export const store = configureStore({
  reducer: {
    filterValues: filterValuesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
