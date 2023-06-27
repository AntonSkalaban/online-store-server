import React from 'react';
import { useParams } from 'react-router-dom';
import { productAPI } from '../../services/productService';
import { NavRow } from './NavRow/NavRow';
import { ImagesContainer } from './ImagesContainer/ImagesContainer';
import { InfoContainer } from './InfoContainer/InfoContainer';
import { ResentlyVewedList } from '../../components/ResentlyViewedList/ResentlyViewedList';
import './style.css';

export const About = () => {
  const { id } = useParams();
  const { data, isFetching, error } = productAPI.useGetProductQuery(id ?? '');

  if (isFetching) return <div>Loading...</div>;
  if (!id || error || !data) return <div>Not found</div>;

  const { title, category, brand, description, images, price, discountPercentage } = data;

  return (
    <div className="about-page">
      <NavRow category={category} brand={brand} title={title} />

      <div className="about__main">
        <ImagesContainer images={images} />
        <InfoContainer
          description={description}
          price={price}
          discountPercentage={discountPercentage}
        />
      </div>
      <ResentlyVewedList productId={id} />
    </div>
  );
};
