import React, { useEffect } from 'react';
import './style.css';
import { CheckboxesBlock } from './CheckboxesBlock.tsx/CheckboxesBlock';
import { CustomObject } from '../../helpers/CustomObject';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { FormFilterFields, updateFormState } from '../../store/FormFilterSlice';
import { GlobalFilterValues } from '../../store/GlobalFilterSlice';

export interface FilterBlockProps {
  onSubmit: (value: GlobalFilterValues) => void;
}

export const FilterForm = ({ onSubmit }: FilterBlockProps) => {
  const globalFilterValues = useSelector((state: RootState) => state.globalFilterValues);
  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);

  const dispatch = useDispatch();
  const changeFormState = (state: GlobalFilterValues) => dispatch(updateFormState(state));

  useEffect(() => {
    changeFormState({ category: globalFilterValues.category });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hanldeSubmitClick = () => {
    onSubmit(formFilterValues);
  };

  const handleResetClick = () => {
    const stateCopy = { ...formFilterValues };
    CustomObject.resetAllFields(stateCopy);

    changeFormState(stateCopy);
    onSubmit(stateCopy);
  };

  return (
    <form
      className="filter-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p onClick={handleResetClick}>Reset</p>
      <CheckboxesBlock
        blockName={FormFilterFields.Category}
        checkedCheckboxes={formFilterValues.category}
      />
      <button onClick={hanldeSubmitClick}>Apply filter</button>
    </form>
  );
};
