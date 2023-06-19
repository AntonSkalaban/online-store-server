import { GlobalFilterValues } from '../store/GlobalFilterSlice';
import { CustomObject } from './CustomObject';

export class SearchParams {
  static create(params: string | object) {
    if (typeof params === 'object') return new URLSearchParams({ ...params });
    return new URLSearchParams(params);
  }

  static createFromFilterValues(filterValues: GlobalFilterValues) {
    const filterValuesWithExistFields = CustomObject.copyWithExistField(filterValues);
    const params = SearchParams.create(filterValuesWithExistFields);
    return params;
  }
}
