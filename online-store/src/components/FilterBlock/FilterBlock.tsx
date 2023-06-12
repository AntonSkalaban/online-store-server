import React, { useState } from 'react';
import { FilterValues } from '../../pages/Main/Main';
import './style.css';
import { CheckboxesBlock } from './CheckboxesBlock.tsx/CheckboxesBlock';
export interface FilterBlockProps {
  submitFilter: (value: FilterValues) => void;
  filterValues: FilterValues;
}

export const FilterBlock = ({ submitFilter, filterValues }: FilterBlockProps) => {
  const [filterVal, setFilterVal] = useState({ category: [] as string[], brand: [] as string[] });

  const hanldeClick = () => {
    submitFilter(filterVal);
  };

  const changeFilterValue = (key: keyof FilterValues, checkboxes: string[]) => {
    setFilterVal({ ...filterVal, [key]: checkboxes });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <CheckboxesBlock
        blockName={'category'}
        filterValues={filterValues}
        changeFilterValue={changeFilterValue}
      />
      <button onClick={hanldeClick}>Apply filter</button>
    </form>
  );
};
