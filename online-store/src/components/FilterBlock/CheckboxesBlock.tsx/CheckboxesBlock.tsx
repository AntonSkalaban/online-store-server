import React, { useCallback, useEffect, useState } from 'react';
import { FilterValues } from '../../../pages/Main/Main';
import { checkboxAPI } from '../../../services/checkboxService';

export interface CheckboxesBlockProps {
  blockName: keyof FilterValues;
  checkedCheckboxes?: string[] | string;
  changeFormState: (obj: Record<string, string | string[] | null>) => void;
}

export interface Checkbox {
  id: string;
  name: string;
  checked: boolean;
}

export const CheckboxesBlock = ({
  blockName,
  checkedCheckboxes,
  changeFormState,
}: CheckboxesBlockProps) => {
  const [checkboxes, setCheckboxes] = useState([] as Checkbox[]);

  const { data, isLoading } = checkboxAPI.useGetCheckboxesNameQuery(null);

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
    changeFormState({ [blockName]: newState.filter((el) => el.checked).map((el) => el.name) });
  };

  if (isLoading) return <div>Loading...</div>;

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
