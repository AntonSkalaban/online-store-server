import { SearchParams } from '../helpers/SearchParams';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GlobalFilterValues {
  category?: string[] | string;
  searchValue?: string;
}

const searchParams = SearchParams.create(window.location.search);

const initialState: GlobalFilterValues = {
  category: searchParams.get('category')?.split(',') ?? '',
  searchValue: searchParams.get('searchValue') ?? '',
};

export const GlobalFilterSlice = createSlice({
  name: 'globalFilterValues',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<GlobalFilterValues>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { update } = GlobalFilterSlice.actions;

export default GlobalFilterSlice.reducer;
