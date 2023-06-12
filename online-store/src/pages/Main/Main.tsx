import React, { useCallback, useEffect, useState } from 'react';
import { getProducts } from '../../http/http';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { FilterBlock } from '../../components/FilterBlock/FilterBlock';
import { PageURL } from '../../helpers/PageURL';
import { SearchParams } from '../../helpers/SearchParams';
import { Product } from 'types';
import './style.css';

export interface FilterValues {
  category?: string[];
  searchValue?: string;
}

export const Main = () => {
  const urlSearchParams = SearchParams.create(window.location.search);

  const [filterValues, setFilterValues] = useState({
    category: urlSearchParams.get('category')?.split(','),
    searchValue: urlSearchParams.get('searchValue'),
  } as FilterValues);

  const [data, setData] = useState([] as Product[]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterSubmit = (newValue: FilterValues) => {
    setFilterValues({ ...filterValues, ...newValue });
  };

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);

      const newUrlParams = SearchParams.createFromFilterValues(filterValues).toString();
      PageURL.update(newUrlParams);

      const newData = await getProducts(newUrlParams);
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
      <FilterBlock submitFilter={handleFilterSubmit} filterValues={filterValues} />
      <SearchBar changeSearchValue={handleFilterSubmit} filterValues={filterValues} />
      {!isLoading && data.length > 0 ? <ProductsList products={data} /> : <div>Loading...</div>}
    </main>
  );
};
