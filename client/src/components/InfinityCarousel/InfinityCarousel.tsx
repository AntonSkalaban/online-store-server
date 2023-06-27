import React, { useState } from 'react';
import './style.css';
import {
  CarouselButtonLeft,
  CarouselButtonRight,
} from '../../components/UI/CarouselButton/CarouselButtons';

interface CaruselProps {
  images: string[];
  activeImgIndex: number;
  changeActiveImgIndex: (index: number) => void;
}

export const InfinityCarousel = ({
  images,
  activeImgIndex,
  changeActiveImgIndex,
}: CaruselProps) => {
  const [leftShiftValue, setLeftShiftValue] = useState(-100);
  const [showTransition, setShowTransition] = useState(false);

  const carueselContainerStyles = {
    left: `${leftShiftValue}%`,
    transition: `${showTransition ? 'all ease-in-out 1s' : 'none'}`,
  };

  const lastImgIndex = images.length - 1;
  const prevImgIndex = activeImgIndex === 0 ? lastImgIndex : activeImgIndex - 1;
  const nextImgIndex = activeImgIndex === lastImgIndex ? 0 : activeImgIndex + 1;

  const careuselImages = [prevImgIndex, activeImgIndex, nextImgIndex];

  const moveRight = () => {
    setLeftShiftValue(-200);
    setShowTransition(true);
  };

  const moveLeft = () => {
    setLeftShiftValue(0);
    setShowTransition(true);
  };

  const handleTransitionEnd = () => {
    setShowTransition(false);
    changeActiveImgIndex(leftShiftValue === 0 ? prevImgIndex : nextImgIndex);
    setLeftShiftValue(-100);
  };

  return (
    <div className="carusel">
      <div
        className="carusel__container"
        style={carueselContainerStyles}
        onTransitionEnd={handleTransitionEnd}
      >
        {careuselImages.map((imageIndex, indx) => {
          return (
            <div className="image-container" key={indx}>
              <img className="product-image" src={images[imageIndex]} />
            </div>
          );
        })}
      </div>

      <CarouselButtonLeft hanldeClick={moveLeft} />
      <CarouselButtonRight hanldeClick={moveRight} />
    </div>
  );
};
