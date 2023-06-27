import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfinityCarousel } from '../../../components/InfinityCarousel/InfinityCarousel';

interface ImagesContainerProps {
  images: string[];
}

export const ImagesContainer = ({ images }: ImagesContainerProps) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    setActiveImgIndex(0);
  }, [id]);

  const changeActiveImgIndex = (index: number) => {
    setActiveImgIndex(index);
  };

  return (
    <div className="product__images-container">
      <div className="product__small-images-container">
        {images.map((src, index) => {
          return (
            <div
              key={src}
              className={`product__small-image-container ${
                activeImgIndex === index ? 'active-image' : ''
              }`}
              onClick={() => changeActiveImgIndex(index)}
            >
              <img className="product-image" src={src} />
            </div>
          );
        })}
      </div>
      <div className="product__big-image-container">
        <InfinityCarousel
          images={images}
          activeImgIndex={activeImgIndex}
          changeActiveImgIndex={changeActiveImgIndex}
        />
      </div>
    </div>
  );
};
