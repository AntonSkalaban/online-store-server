import React, { useEffect, useState } from 'react';
import { FilterValues } from '../../../pages/Main/Main';
import { getCategories } from '../../../http/http';

export interface CheckboxesBlockProps {
  blockName: keyof FilterValues;
  filterValues: FilterValues;
  changeFilterValue: (key: keyof FilterValues, checkboxesName: string[]) => void;
}

export interface Checkbox {
  id: string;
  name: string;
  checked: boolean;
}

export const CheckboxesBlock = ({
  blockName,
  filterValues,
  changeFilterValue,
}: CheckboxesBlockProps) => {
  const [checkboxes, setCheckboxes] = useState([] as Checkbox[]);

  const createInitialState = async () => {
    try {
      const checkedCheckboxes = filterValues[blockName];

      const data = await getCategories();

      setCheckboxes(
        data.map((item) => {
          return {
            id: item._id,
            name: item.name,
            checked: checkedCheckboxes?.includes(item.name) ?? false,
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

  useEffect(() => {}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    const newState = checkboxes.map((item) => {
      return item.name === name ? { ...item, checked: !item.checked } : item;
    });
    setCheckboxes(newState);
    changeFilterValue(
      blockName,
      newState.filter((el) => el.checked).map((el) => el.name)
    );
  };

  return (
    <div>
      <p>{blockName}</p>
      {checkboxes.map(({ id, name, checked }) => {
        return (
          <label key={id}>
            <input type="checkbox" name={name} checked={checked} onChange={handleChange} />
            {name}
          </label>
        );
      })}
    </div>
  );
};
