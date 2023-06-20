import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export enum FormFilterFields {
  Category = 'category',
}

export interface FormFilterValues {
  [FormFilterFields.Category]?: string[] | string;
}

const initialState: FormFilterValues = {
  category: [],
};

export const FormFilterValuesSlice = createSlice({
  name: 'formFilterValues',
  initialState,
  reducers: {
    updateFormState: (state, action: PayloadAction<FormFilterValues>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFormState } = FormFilterValuesSlice.actions;

export default FormFilterValuesSlice.reducer;
