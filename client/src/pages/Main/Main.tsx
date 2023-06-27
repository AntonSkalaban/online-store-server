import React, { useEffect } from 'react';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { FilterForm } from '../../components/FilterForm/FilterForm';
import { PageURL } from '../../helpers/PageURL';
import { SearchParams } from '../../helpers/SearchParams';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalFilterValues, updateGlobalState } from '../../store/GlobalFilterSlice';
import { productAPI } from '../../services/productService';
import './style.css';

export const Main = () => {
  const globalfilterValues = useSelector((state: RootState) => state.globalFilterValues);
  const dispatch = useDispatch();

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(globalfilterValues);

  useEffect(() => {
    const newUrlParams = SearchParams.createFromFilterValues(globalfilterValues).toString();

    PageURL.update(newUrlParams);
  }, [globalfilterValues]);

  const changeFilterValue = (values: GlobalFilterValues) => {
    dispatch(updateGlobalState(values));
  };

  return (
    <main className="main">
      <FilterForm onSubmit={changeFilterValue} />
      <div className="main__main">
        <SearchBar onSubmit={changeFilterValue} />
        <ProductsList data={data} isLoading={isFetching} />
      </div>
    </main>
  );
};
