import React from 'react';
import './style.css';
import { Product } from '../../types';
import { NavLink } from 'react-router-dom';
import { getDiscountedPrice } from '../../helpers/getDiscountPrice';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { _id, title, brand, images, price, discountPercentage } = product;
  const isOnSale = discountPercentage > 0;

  return (
    <div className="product-card">
      <NavLink to={`/about/${_id}`}>
        <div className="product-card__image-container">
          <img className="product-image" src={images[0]} />
        </div>
      </NavLink>
      <div className="product-card__info-container">
        {isOnSale && (
          <p className="price_new">
            ${getDiscountedPrice(price, discountPercentage)}{' '}
            <span className="discount">({discountPercentage}%)</span>
          </p>
        )}
        <p className={`${isOnSale ? 'price_old' : 'price'}`}>${price}</p>
        <p className="product-card__title">{title}</p>
        <p className="product-card__brand">{brand}</p>
      </div>
    </div>
  );
};
