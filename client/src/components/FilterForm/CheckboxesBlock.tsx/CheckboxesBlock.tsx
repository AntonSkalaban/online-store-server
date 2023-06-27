import React, { useCallback, useEffect, useState } from 'react';
import { checkboxAPI } from '../../../services/checkboxService';
import { FormFilterValues, updateFormState } from '../../../store/FormFilterSlice';
import { useDispatch } from 'react-redux';
import './style.css';

export interface CheckboxesListProps {
  blockName: keyof FormFilterValues;
  checkedCheckboxes?: string[] | string;
}

export interface Checkbox {
  id: string;
  name: string;
  checked: boolean;
}

export const CheckboxesBlock = ({ blockName, checkedCheckboxes }: CheckboxesListProps) => {
  const [checkboxes, setCheckboxes] = useState([] as Checkbox[]);

  const { data, isLoading } = checkboxAPI.useGetCheckboxesNameQuery();

  const dispatch = useDispatch();
  const changeFilterFormState = (state: FormFilterValues) => dispatch(updateFormState(state));

  const createInitialState = useCallback(() => {
    if (!data) return;

    setCheckboxes(
      data.map((item) => {
        return {
          id: item._id,
          name: item.name,
          checked: checkedCheckboxes?.includes(item.name) ?? false,
        };
      })
    );
  }, [checkedCheckboxes, data]);

  useEffect(() => {
    createInitialState();
  }, [createInitialState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    const newState = checkboxes.map((item) => {
      return item.name === name ? { ...item, checked: !item.checked } : item;
    });

    setCheckboxes(newState);
    changeFilterFormState({
      [blockName]: newState.filter((el) => el.checked).map((el) => el.name),
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="checkboxes-block">
      <p className="checkboxes__title">{blockName}</p>
      <ul className="checkboxes__list">
        {checkboxes.map(({ id, name, checked }) => {
          return (
            <li className="checkboxes__item" key={id}>
              <label className="checkboxes__label">
                <input type="checkbox" name={name} checked={checked} onChange={handleChange} />
                {name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
