import { Category, Product } from '../types';
import { url } from './const';

export const getProducts = async (params: string): Promise<Product[]> => {
  const res = await fetch(`${url}/products${params ? `?${params}` : ''}`);
  const data = await res.json();
  console.log(`${url}/products${params ? `?${params}` : ''}`);
  return data;
};

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${url}/categories`);
  const data = await res.json();
  return data;
};

// const foo = async () => {
//   const data = await getCategories();
//   // const i = data.products[0];
//   data.forEach(async (i) => {
//     console.log(i);

//     await fetch('http://localhost:3000/categories', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(
//         { name: i }
//         // title: i.title,
//         // description: i.description,
//         // price: i.price,
//         // discountPercentage: i.discountPercentage,
//         // rating: i.rating,
//         // stock: i.stock,
//         // brand: i.brand,
//         // category: i.category,
//         // thumbnail: i.thumbnail,
//         // images: i.images,
//       ),
//     });
//   });
// };
// foo();
