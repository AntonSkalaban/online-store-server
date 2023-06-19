import React, { useState } from 'react';
import './style.css';
import { FilterValues } from '../../pages/Main/Main';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface SearchBarProps {
  onSubmit: (value: FilterValues) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const searchedValue = useSelector((state: RootState) => state.filterValues.searchValue);

  const [value, setValue] = useState(searchedValue);

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
