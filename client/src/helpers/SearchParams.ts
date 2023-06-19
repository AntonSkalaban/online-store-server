import { FilterValues } from '../pages/Main/Main';
import { copyObjecWithExistFields } from './object';

export class SearchParams {
  static create(params: string | object) {
    if (typeof params === 'object') return new URLSearchParams({ ...params });
    return new URLSearchParams(params);
  }

  static createFromFilterValues(filterValues: FilterValues) {
    const filterValuesWithExistFields = copyObjecWithExistFields(filterValues);
    const params = SearchParams.create(filterValuesWithExistFields);
    return params;
  }
}
