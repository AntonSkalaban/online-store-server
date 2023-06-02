import React from 'react';
import './style.css';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const getDiscountedPrice = (price: number, discountPercentage: number) => {
  return Math.ceil(price - (price / 100) * discountPercentage);
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const isOnSale = product.discountPercentage > 0;

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img className="product-card__image" src={product.images[0]} />
      </div>
      <div className="product-card__info-container">
        <p className="product-card__price">
          {isOnSale ? (
            <>
              <span className="price_old">{product.price}</span>
              <span className="price_new">
                {getDiscountedPrice(product.price, product.discountPercentage)}$
              </span>
            </>
          ) : (
            <span> {product.price}$</span>
          )}
        </p>
        <p className="product-card__title">{product.title}</p>
        <p className="product-card__brand">{product.brand}</p>
        <p className="product-card__category">{product.category}</p>
      </div>
    </div>
  );
};
