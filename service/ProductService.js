import Product from '../model/Product.js';

class ProductService {

  async create(product) {
    const createdProduct = await Product.create(product);
    return createdProduct;
  }

  async getAll(params) {
    const findParams = {};
    const sortParams = {};
    let skip = 0;
    let limit;
    
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
        case 'page':
          limit = 20;
          skip = val * limit;
          break;
        default:
          break;
      }
    });

    const products =  await Product.find(findParams).sort(sortParams).skip(skip).limit(limit);
    const searchCount = await Product.countDocuments(findParams);
    const total = await Product.countDocuments();
    
    return {
      products: products,
      searchCount: searchCount,
      total: total,
    }
  }

  async getOne(id) {
    if (!id) throw new Error('ID not specified');
    return await Product.findById(id);
  }

}

export default new ProductService();
