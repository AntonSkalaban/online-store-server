import { configureStore } from '@reduxjs/toolkit';
import GlobalFilterSlice from './GlobalFilterSlice';
import FormFilterSlice from './FormFilterSlice';
import { productAPI } from '../services/productService';
import { checkboxAPI } from '../services/checkboxService';

export const store = configureStore({
  reducer: {
    globalFilterValues: GlobalFilterSlice,
    formFilterValues: FormFilterSlice,
    [productAPI.reducerPath]: productAPI.reducer,
    [checkboxAPI.reducerPath]: checkboxAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([productAPI.middleware, checkboxAPI.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
