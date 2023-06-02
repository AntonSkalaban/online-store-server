import { ProductsResponce } from '../types';
import { url } from './const';

export const getProducts = async (params: string): Promise<ProductsResponce> => {
  const res = await fetch(`${url}/products${params && `?${params}`}`);
  const data = await res.json();
  return data;
};

export const getCategories = async (): Promise<string[]> => {
  const res = await fetch(`${url}/products/categories`);
  const data = await res.json();
  return data;
};
