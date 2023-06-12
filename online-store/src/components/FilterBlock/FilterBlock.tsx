import React, { useEffect, useState } from 'react';
import { getCategories } from '../../http/http';
import { FilterValues } from '../../pages/Main/Main';
import './style.css';
export interface FilterBlockProps {
  submitFilter: (value: FilterValues) => void;
  filterValues: FilterValues;
}

export const FilterBlock = ({ submitFilter, filterValues }: FilterBlockProps) => {
  const [categories, setCategories] = useState([] as { name: string; checked: boolean }[]);

  const createInitialState = async () => {
    try {
      const checkedCategories = filterValues.category;

      const data = await getCategories();

      setCategories(
        data.map((category) => {
          return {
            name: category.name,
            checked: checkedCategories?.includes(category.name) ?? false,
          };
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    createInitialState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setCategories(
      categories.map((cat) => {
        return cat.name === name ? { ...cat, checked: !cat.checked } : cat;
      })
    );
  };

  const hanldeClick = () => {
    submitFilter({ category: categories.filter((cat) => cat.checked).map((el) => el.name) });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <p>Category</p>
        {categories.map(({ name, checked }) => {
          return (
            <label key={name}>
              <input type="checkbox" name={name} checked={checked} onChange={handleChange} />
              {name}
            </label>
          );
        })}
      </div>
      <button onClick={hanldeClick}>Apply filter</button>
    </form>
  );
};
