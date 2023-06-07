export enum Pages {
  Main = 'Main',
  About = 'About',
  Cart = 'Cart',
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  __v: number;
}

export interface Category {
  _id: string;
  name: string;
  __v: number;
}
