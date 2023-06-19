import { SearchParams } from '../helpers/SearchParams';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterValues {
  category?: string[] | string;
  searchValue?: string;
}

const searchParams = SearchParams.create(window.location.search);

const initialState: FilterValues = {
  category: searchParams.get('category')?.split(',') ?? '',
  searchValue: searchParams.get('searchValue') ?? '',
};

export const FilterValuesSlice = createSlice({
  name: 'filterValues',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<FilterValues>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { update } = FilterValuesSlice.actions;

export default FilterValuesSlice.reducer;
