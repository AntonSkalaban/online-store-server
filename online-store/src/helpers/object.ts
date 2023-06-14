import { FilterValues } from '../pages/Main/Main';

export const copyObjecWithExistFields = (obj: FilterValues) => {
  const clone = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(obj).filter(([_, value]) => value && value?.length)
  );
  return clone;
};

export const resetAllFields = (obj: Record<string, string | string[] | null>) => {
  Object.keys(obj).forEach((key) => {
    obj[key] = '';
  });
  return obj;
};
