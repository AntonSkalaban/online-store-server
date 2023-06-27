import { SearchParams } from '../helpers/SearchParams';
import { GlobalFilterValues } from '../store/GlobalFilterSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Product } from '../types';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getFilterdProducts: build.query<Product[], GlobalFilterValues>({
      query: (filterValues) => ({
        url: `/products`,
        params: SearchParams.create(filterValues),
      }),
    }),

    getProduct: build.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});
