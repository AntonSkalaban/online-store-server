import React, { useCallback, useEffect, useState } from 'react';
import { getProducts } from '../../http/http';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { FilterBlock } from '../../components/FilterBlock/FilterBlock';
import { PageURL } from '../../helpers/PageURL';
import { SearchParams } from '../../helpers/SearchParams';
import { Product } from 'types';
import './style.css';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../store/filterValuesSlice';

export interface FilterValues {
  category?: string[];
  searchValue?: string;
}

export const Main = () => {
  const filterValues = useSelector((state: RootState) => state.filterValues);
  const dispatch = useDispatch();

  const [data, setData] = useState([] as Product[]);
  const [isLoading, setIsLoading] = useState(false);

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

  const changeFilterValue = (filterValues: FilterValues) => {
    dispatch(update(filterValues));
  };

  const handleFilterSubmit = (filterValues: FilterValues) => {
    changeFilterValue(filterValues);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <main className="main">
      <FilterBlock onSubmit={handleFilterSubmit} />
      <SearchBar onSubmit={handleFilterSubmit} />

      <ProductsList products={data} isLoading={isLoading} />
    </main>
  );
};
