import React from 'react';
import './style.css';

interface CarouselButtonProps {
  hanldeClick: () => void;
  isDisabled?: boolean;
}

export const CarouselButtonLeft = ({ isDisabled = false, hanldeClick }: CarouselButtonProps) => {
  return (
    <button className="carusel__btn carusel__btn_prev" disabled={isDisabled} onClick={hanldeClick}>
      {'<'}
    </button>
  );
};

export const CarouselButtonRight = ({ isDisabled = false, hanldeClick }: CarouselButtonProps) => {
  return (
    <button className="carusel__btn carusel__btn_next" disabled={isDisabled} onClick={hanldeClick}>
      {'>'}
    </button>
  );
};
