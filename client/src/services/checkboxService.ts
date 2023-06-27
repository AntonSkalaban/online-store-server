import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Category } from '../types';

export const checkboxAPI = createApi({
  reducerPath: 'checkboxAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getCheckboxesName: build.query<Category[], void>({
      query: () => `/categories`,
    }),
  }),
});
