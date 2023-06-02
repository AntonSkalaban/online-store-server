import React from 'react';
import './style.css';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductsListProps {
  products: Product[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="proucts-list">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
