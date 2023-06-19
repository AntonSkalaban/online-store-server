import React, { useEffect, useState } from 'react';
import { FilterValues } from '../../pages/Main/Main';
import './style.css';
import { CheckboxesBlock } from './CheckboxesBlock.tsx/CheckboxesBlock';
import { resetAllFields } from '../../helpers/object';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { FilterFormValues, updateForm } from '../../store/filterFormSlice';

export enum Name {
  category = 'category',
}
export interface FilterBlockProps {
  onSubmit: (value: FilterValues) => void;
}

export const FilterBlock = ({ onSubmit }: FilterBlockProps) => {
  const filterValues = useSelector((state: RootState) => state.filterValues);
  const filterFormValues = useSelector((state: RootState) => state.formValues);

  const dispatch = useDispatch();
  const changeFormState = (state: FilterFormValues) => dispatch(updateForm(state));

  console.log(filterFormValues);
  useEffect(() => {
    changeFormState({ category: filterValues.category });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hanldeSubmitClick = () => {
    onSubmit(filterFormValues);
  };

  const handleResetAllClick = () => {
    const resetedState = { ...filterFormValues };
    resetAllFields(resetedState);

    changeFormState(resetedState);
    onSubmit(resetedState);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p onClick={handleResetAllClick}>Reset all</p>
      <CheckboxesBlock blockName={Name.category} checkedCheckboxes={filterFormValues.category} />
      <button onClick={hanldeSubmitClick}>Apply filter</button>
    </form>
  );
};
