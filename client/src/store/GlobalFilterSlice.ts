import { SearchParams } from '../helpers/SearchParams';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormFilterValues } from './FormFilterSlice';

export enum GlobalStateFields {
  SearchValue = 'searchValue',
}
export interface GlobalFilterValues extends FormFilterValues {
  [GlobalStateFields.SearchValue]?: string;
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
    updateGlobalState: (state, action: PayloadAction<GlobalFilterValues>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateGlobalState } = GlobalFilterSlice.actions;

export default GlobalFilterSlice.reducer;
