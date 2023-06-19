import React, { useEffect } from 'react';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { FilterBlock } from '../../components/FilterBlock/FilterBlock';
import { PageURL } from '../../helpers/PageURL';
import { SearchParams } from '../../helpers/SearchParams';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../store/filterValuesSlice';
import { productAPI } from '../../services/productService';
import './style.css';

export interface FilterValues {
  category?: string[] | string;
  searchValue?: string;
}

export const Main = () => {
  const filterValues = useSelector((state: RootState) => state.filterValues);
  const dispatch = useDispatch();

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(filterValues);

  useEffect(() => {
    const newUrlParams = SearchParams.createFromFilterValues(filterValues).toString();

    PageURL.update(newUrlParams);
  }, [filterValues]);

  const changeFilterValue = (filterValues: FilterValues) => {
    dispatch(update(filterValues));
  };
  console.log(data);
  return (
    <main className="main">
      <FilterBlock onSubmit={changeFilterValue} />
      <SearchBar onSubmit={changeFilterValue} />
      <ProductsList data={data} isLoading={isFetching} />
    </main>
  );
};
