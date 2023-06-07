import React, { useCallback, useEffect, useState } from 'react';
import { getProducts } from '../../http/http';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Product } from 'types';
import './style.css';
import { FilterBlock } from '../../components/FilterBlock/FilterBlock';

export interface UrlSearchKeys {
  category?: string[];
  searchValue?: string;
}

const createUrlSearchParams = (obj: object) => {
  return new URLSearchParams({ ...obj });
};

const deleteUndefURLFields = (url: URLSearchParams) => {
  const emptyNames = [] as string[];

  url.forEach((value, key) => {
    if (!value) emptyNames.push(key);
  });
  emptyNames.forEach((name) => url.delete(name));
};

export const Main = () => {
  const [data, setData] = useState([] as Product[]);
  const [isLoading, setIsLoading] = useState(false);

  const [filterValues, setFilterValues] = useState({} as UrlSearchKeys);

  const handleFilterSubmit = (newValue: UrlSearchKeys) => {
    setFilterValues({ ...filterValues, ...newValue });
  };

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);

      const newUrlSearchParams = createUrlSearchParams(filterValues);
      deleteUndefURLFields(newUrlSearchParams);

      const newData = await getProducts(newUrlSearchParams.toString());
      setData(newData);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [filterValues]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <main className="main">
      <FilterBlock submitFilter={handleFilterSubmit} />
      <SearchBar changeSearchValue={handleFilterSubmit} />
      {!isLoading && data.length > 0 ? <ProductsList products={data} /> : <div>Loading...</div>}
    </main>
  );
};
