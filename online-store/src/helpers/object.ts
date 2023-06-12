import { FilterValues } from '../pages/Main/Main';

export const copyObjecWithExistFields = (obj: FilterValues) => {
  const clone = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(obj).filter(([_, value]) => value && value?.length)
  );
  return clone;
};
