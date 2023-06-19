import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterFormValues {
  category?: string[] | string;
}

const initialState: FilterFormValues = {
  category: [],
};

export const FilterFormSlice = createSlice({
  name: 'filterFormValues',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<FilterFormValues>) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
  },
});

export const { updateForm } = FilterFormSlice.actions;

export default FilterFormSlice.reducer;
