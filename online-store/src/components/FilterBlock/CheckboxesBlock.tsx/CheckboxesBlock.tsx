import React, { useEffect, useState } from 'react';
import { FilterValues } from '../../../pages/Main/Main';
import { getCategories } from '../../../http/http';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

export interface CheckboxesBlockProps {
  blockName: keyof FilterValues;
  changeFormState: (key: keyof FilterValues, checkboxesName: string[]) => void;
}

export interface Checkbox {
  id: string;
  name: string;
  checked: boolean;
}

export const CheckboxesBlock = ({ blockName, changeFormState }: CheckboxesBlockProps) => {
  const [checkboxes, setCheckboxes] = useState([] as Checkbox[]);

  const checkedCheckboxes = useSelector((state: RootState) => state.filterValues[blockName]);

  const createInitialState = async () => {
    try {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    const newState = checkboxes.map((item) => {
      return item.name === name ? { ...item, checked: !item.checked } : item;
    });

    setCheckboxes(newState);
    changeFormState(
      blockName,
      newState.filter((el) => el.checked).map((el) => el.name)
    );
  };

  useEffect(() => {
    createInitialState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
