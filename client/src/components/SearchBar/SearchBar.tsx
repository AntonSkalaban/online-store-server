import React, { useState } from 'react';
import './style.css';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { GlobalFilterValues } from '../../store/GlobalFilterSlice';

interface SearchBarProps {
  onSubmit: (value: GlobalFilterValues) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const searchedValue = useSelector((state: RootState) => state.globalFilterValues.searchValue);
  console.log(searchedValue);
  const [value, setValue] = useState(searchedValue ?? '');
  console.log(value, searchedValue);

  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement)?.value;
    setValue(value);
  };

  const handleClick = () => {
    onSubmit({ searchValue: value });
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
