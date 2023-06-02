import React, { useState } from 'react';

import './style.css';
import { UrlSearchKeys } from '../../pages/Main/Main';

interface SearchBarProps {
  changeSearchValue: (value: UrlSearchKeys) => void;
}

export const SearchBar = ({ changeSearchValue }: SearchBarProps) => {
  const [value, setValue] = useState('');

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
