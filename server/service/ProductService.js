import Product from '../model/Product.js';

class ProductService {
    async create(product) {
        const createdProduct = await Product.create(product)
        return createdProduct;
    }

    async getAll() {
        const products = await Product.find()
        return products;
    }

    async getOne(id) {            
        if(!id) throw new Error('ID not specified');

        const product = await Product.findById(id);
        return res.json(product);
    }
}

export default new ProductService();