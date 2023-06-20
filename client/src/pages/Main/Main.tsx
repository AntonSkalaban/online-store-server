import React, { useEffect } from 'react';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { FilterForm } from '../../components/FilterBlock/FilterForm';
import { PageURL } from '../../helpers/PageURL';
import { SearchParams } from '../../helpers/SearchParams';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalFilterValues, updateGlobalState } from '../../store/GlobalFilterSlice';
import { productAPI } from '../../services/productService';
import './style.css';

export const Main = () => {
  const filterValues = useSelector((state: RootState) => state.globalFilterValues);
  const dispatch = useDispatch();

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(filterValues);

  useEffect(() => {
    const newUrlParams = SearchParams.createFromFilterValues(filterValues).toString();

    PageURL.update(newUrlParams);
  }, [filterValues]);

  const changeFilterValue = (filterValues: GlobalFilterValues) => {
    dispatch(updateGlobalState(filterValues));
  };

  return (
    <main className="main">
      <FilterForm onSubmit={changeFilterValue} />
      <SearchBar onSubmit={changeFilterValue} />
      <ProductsList data={data} isLoading={isFetching} />
    </main>
  );
};
