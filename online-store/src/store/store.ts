import { configureStore } from '@reduxjs/toolkit';
import filterValuesSlice from './filterValuesSlice';
import { productAPI } from '../services/productService';

export const store = configureStore({
  reducer: {
    filterValues: filterValuesSlice,
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
