import React from 'react';
import './style.css';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductsListProps {
  data: Product[] | undefined;
  isLoading: boolean;
}

export const ProductsList = ({ data, isLoading }: ProductsListProps) => {
  if (isLoading) return <div>Loading...</div>;

  if (!data?.length) return <div>Not found</div>;

  return (
    <div className="proucts-list">
      {data.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
};
