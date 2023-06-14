import React, { useState } from 'react';
import { FilterValues } from '../../pages/Main/Main';
import './style.css';
import { CheckboxesBlock } from './CheckboxesBlock.tsx/CheckboxesBlock';
export interface FilterBlockProps {
  onSubmit: (value: FilterValues) => void;
}

export const FilterBlock = ({ onSubmit }: FilterBlockProps) => {
  const [formState, setFormState] = useState({} as FilterValues);

  const changeFormState = (key: keyof FilterValues, checkboxes: string[]) => {
    setFormState({ ...formState, [key]: checkboxes });
  };

  const hanldeSubmitClick = () => {
    onSubmit(formState);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <CheckboxesBlock blockName={'category'} changeFormState={changeFormState} />
      <button onClick={hanldeSubmitClick}>Apply filter</button>
    </form>
  );
};
