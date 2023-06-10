import React, { useEffect, useState } from 'react';
import { getCategories } from '../../http/http';
import './style.css';
import { UrlSearchKeys } from '../../pages/Main/Main';

interface FilterBlockProps {
  submitFilter: (value: UrlSearchKeys) => void;
}
export const FilterBlock = ({ submitFilter }: FilterBlockProps) => {
  const [categories, setCategories] = useState([] as { name: string; checked: boolean }[]);

  const createInitialState = async () => {
    try {
      const data = await getCategories();
      setCategories(
        data.map((category) => {
          return { name: category.name, checked: false };
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    createInitialState();
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
