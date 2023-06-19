import React, { useState } from 'react';
import { FilterValues } from '../../pages/Main/Main';
import './style.css';
import { CheckboxesBlock } from './CheckboxesBlock.tsx/CheckboxesBlock';
import { resetAllFields } from '../../helpers/object';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
export enum Name {
  category = 'category',
}
export interface FilterBlockProps {
  onSubmit: (value: FilterValues) => void;
}

export const FilterBlock = ({ onSubmit }: FilterBlockProps) => {
  const filterValues = useSelector((state: RootState) => state.filterValues);

  const [formState, setFormState] = useState({
    category: filterValues.category,
  } as FilterValues);

  const changeFormState = (obj: Record<string, string | string[] | null>) => {
    setFormState({ ...formState, ...obj });
  };

  const hanldeSubmitClick = () => {
    onSubmit(formState);
  };

  const handleResetAllClick = () => {
    const resetedState = { ...formState };
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
      <CheckboxesBlock
        blockName={Name.category}
        checkedCheckboxes={filterValues.category}
        changeFormState={changeFormState}
      />
      <button onClick={hanldeSubmitClick}>Apply filter</button>
    </form>
  );
};
