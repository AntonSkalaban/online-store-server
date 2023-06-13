import React from 'react';
import './style.css';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductsListProps {
  products: Product[];
  isLoading: boolean;
}

export const ProductsList = ({ products, isLoading }: ProductsListProps) => {
  if (isLoading) return <div>Loading...</div>;

  if (!isLoading && !products.length) return <div>Not found</div>;

  return (
    <div className="proucts-list">
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
};
