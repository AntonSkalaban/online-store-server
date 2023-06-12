import React, { useState } from 'react';
import './style.css';
import { FilterValues } from '../../pages/Main/Main';

interface SearchBarProps {
  changeSearchValue: (value: FilterValues) => void;
  filterValues: FilterValues;
}

export const SearchBar = ({ changeSearchValue, filterValues }: SearchBarProps) => {
  const [value, setValue] = useState(filterValues.searchValue ?? '');

  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement)?.value;
    setValue(value);
  };

  const handleClick = () => {
    changeSearchValue({ searchValue: value });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="input search-bar__input"
        placeholder="Введите название..."
        value={value}
        onChange={changeValue}
      />
      <button className="search-bar__btn" onClick={handleClick}>
        Найти
      </button>
    </div>
  );
};
