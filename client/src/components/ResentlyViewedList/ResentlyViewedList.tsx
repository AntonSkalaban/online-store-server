import React, { useEffect } from 'react';
import { ResentlyViewed } from '../../helpers/ResentlyViewed';
import { ViewedProduct } from './ViewedProduct/ViewedProduct';
import { Carousel } from '../../components/Caruosel/Carouesel';

interface ResentlyVewedListProps {
  productId: string;
}

export const ResentlyVewedList = ({ productId }: ResentlyVewedListProps) => {
  const productIds = ResentlyViewed.get();

  useEffect(() => {
    ResentlyViewed.save(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="resently-viewed">
      <p>Resently</p>
      {!productIds?.length ? (
        <p>No products</p>
      ) : (
        <Carousel>
          {productIds.map((id) => {
            return <ViewedProduct key={id} cardId={id} />;
          })}
        </Carousel>
      )}
    </div>
  );
};
