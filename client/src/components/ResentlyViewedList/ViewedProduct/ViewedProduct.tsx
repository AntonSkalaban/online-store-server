import React from 'react';
import { ProductCard } from '../../ProductCard/ProductCard';
import { productAPI } from '../../../services/productService';

interface ViewedProductProps {
  cardId: number;
}
export const ViewedProduct = ({ cardId }: ViewedProductProps) => {
  const { data, isFetching } = productAPI.useGetProductQuery(String(cardId));

  if (isFetching) return <div>Loading...</div>;
  if (data) return <ProductCard product={data} />;
  return <></>;
};
