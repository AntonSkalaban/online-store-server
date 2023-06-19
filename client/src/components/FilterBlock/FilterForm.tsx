import React, { useEffect } from 'react';
import './style.css';
import { CheckboxesList } from './CheckboxesList.tsx/CheckboxesList';
import { CustomObject } from '../../helpers/CustomObject';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { update } from '../../store/FormFilterSlice';
import { GlobalFilterValues } from '../../store/GlobalFilterSlice';

export enum Name {
  category = 'category',
}
export interface FilterBlockProps {
  onSubmit: (value: GlobalFilterValues) => void;
}

export const FilterForm = ({ onSubmit }: FilterBlockProps) => {
  const globalFilterValues = useSelector((state: RootState) => state.globalFilterValues);
  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);

  const dispatch = useDispatch();
  const changeFormState = (state: GlobalFilterValues) => dispatch(update(state));

  useEffect(() => {
    changeFormState({ category: globalFilterValues.category });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hanldeSubmitClick = () => {
    onSubmit(formFilterValues);
  };

  const handleResetAllClick = () => {
    const stateCopy = { ...globalFilterValues };
    CustomObject.resetAllFields(stateCopy);

    changeFormState(stateCopy);
    onSubmit(stateCopy);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p onClick={handleResetAllClick}>Reset all</p>
      <CheckboxesList blockName={Name.category} checkedCheckboxes={formFilterValues.category} />
      <button onClick={hanldeSubmitClick}>Apply filter</button>
    </form>
  );
};
