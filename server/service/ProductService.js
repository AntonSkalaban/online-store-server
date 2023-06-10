import Product from '../model/Product.js';

class ProductService {
    async create(product) {
        const createdProduct = await Product.create(product)
        return createdProduct;
    }

    async getAll(params) {
       const obj = {}

        if (params?.category) {
            obj.category = params.category.split(',')
        }

        if (params?.searchValue) {
            const re = new RegExp(params.searchValue, 'i');
            obj['$or'] = [{category: re}, {name: re}, {brand: re}] ;
        }

        return await Product.find(obj)
    }

    async getOne(id) {            
        if(!id) throw new Error('ID not specified');

        const product = await Product.findById(id);
        return res.json(product);
    }
}

export default new ProductService();