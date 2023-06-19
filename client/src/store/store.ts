import { configureStore } from '@reduxjs/toolkit';
import filterValuesSlice from './filterValuesSlice';
import filterFormSlice from './filterFormSlice';
import { productAPI } from '../services/productService';
import { checkboxAPI } from '../services/checkboxService';

export const store = configureStore({
  reducer: {
    filterValues: filterValuesSlice,
    formValues: filterFormSlice,
    [productAPI.reducerPath]: productAPI.reducer,
    [checkboxAPI.reducerPath]: checkboxAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([productAPI.middleware, checkboxAPI.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
