import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FormFilterValues {
  category?: string[] | string;
}

const initialState: FormFilterValues = {
  category: [],
};

export const FormFilterValuesSlice = createSlice({
  name: 'formFilterValues',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<FormFilterValues>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { update } = FormFilterValuesSlice.actions;

export default FormFilterValuesSlice.reducer;
