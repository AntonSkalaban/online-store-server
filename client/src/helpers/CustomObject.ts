import { GlobalFilterValues } from '../store/GlobalFilterSlice';

export class CustomObject {
  static copyWithExistField(obj: GlobalFilterValues) {
    const clone = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(obj).filter(([_, value]) => value && value?.length)
    );
    return clone;
  }

  static resetAllFields = (obj: Record<string, string | string[] | null>) => {
    Object.keys(obj).forEach((key) => {
      obj[key] = '';
    });
  };
}
