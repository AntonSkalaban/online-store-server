export const getDiscountedPrice = (price: number, discount: number) => {
  return Math.round(price - (price / 100) * discount);
};
