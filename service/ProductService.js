import Product from '../model/Product.js';

class ProductService {

  async create(product) {
    const createdProduct = await Product.create(product);
    return createdProduct;
  }

  async getAll(params) {
    const findParams = {};
    const sortParams = {};
    
    console.log(params) 
    Object.entries(params).forEach(([key, val]) => {
      if(!val.length) return
      switch (key) {
        case 'category':
          findParams.category = val.split(',');
          break;
        case 'brand':
          findParams.brand = val.split(',');
          break;
        case 'searchValue':
          const re = new RegExp(params.searchValue, 'i');
          findParams['$or'] = [{category: re}, {title: re}, {brand: re}] ;
          break;
        case 'sort':
          const [sortBy, sortFrom] = val.split('-');
          sortParams[sortBy] = sortFrom === 'ASC' ? 1 : -1;
          break;
        case 'price':
          const [minPrice, maxPrice] = val.split(',');
          findParams.discountPrice = { $gte: minPrice, $lte: maxPrice };
          break;
        default:
          break;
      }
    });
    console.log(findParams)
    console.log(sortParams)
    
    const total = await Product.countDocuments();
    const products =  await Product.find(findParams).sort(sortParams).skip(0).limit(4);

    return {
      products: products,
      total: total,
    }
  }

  async getOne(id) {
    if (!id) throw new Error('ID not specified');
    return await Product.findById(id);
  }

}

export default new ProductService();
