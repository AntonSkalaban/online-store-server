import React from 'react';
import { getDiscountedPrice } from '../../../helpers/getDiscountPrice';

interface InfoContainerProps {
  description: string;
  discountPercentage: number;
  price: number;
}

export const InfoContainer = ({ description, discountPercentage, price }: InfoContainerProps) => {
  const isOnSale = discountPercentage > 0;

  return (
    <div className="poduct__info-container">
      <p>{description}</p>

      {isOnSale ? (
        <>
          <p className="price_new">Now ${getDiscountedPrice(price, discountPercentage)} </p>
          <p>
            Was ${price} <span className="discount">({discountPercentage}%)</span>
          </p>
        </>
      ) : (
        <p className="price">${price}</p>
      )}
    </div>
  );
};
