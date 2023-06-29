import Product from '../model/Product.js';

class ProductService {
    async create(product) {
        const createdProduct = await Product.create(product)
        return createdProduct;
    }

    async getAll(params) {
        const findParams = {};
        const sortParams = {}
    Object.entries(params).forEach(([key, ...val]) => {
        const valueString = val.toString()
            switch (key) {
                case 'category':
                    findParams.category = valueString.split(',');
                    break;
                case 'brand':
                    findParams.brand = valueString.split(',');
                    break;                                                 
                case 'searchValue':
                    findParams.searchValue = valueString;
                    break; 
               case 'sortBy':

                const [sortBy, sortFrom] = valueString.split('-')
                     sortParams[sortBy] =  sortFrom === 'ASC' ? 1 : -1;
                    break; 
                default:
                    break;
            }
        })
     ;

     console.log(findParams, sortParams)
        // if (params?.category) {
        //     findParams.category = params.category.split(',')
        // }

        // if (params?.brand) {
        //     findParams.brand = params.brand.split(',')
        // }

        // if (params?.searchValue) {
        //     const re = new RegExp(params.searchValue, 'i');
        //     findParams['$or'] = [{category: re}, {name: re}, {brand: re}] ;
        // }

        // if (params?.sortBy) {
        //     const [sortBy, sortFrom] = params?.sortBy.split('-')
        //     sortParams[sortBy] =  sortFrom === 'ASC' ? 1 : -1;
        // } else {
        //     sortParams.price = 1;
        // }
        // console.log(findParams)
        return await Product.find(findParams).sort(sortParams)
    }

    async getOne(id) {            
        if(!id) throw new Error('ID not specified');
        return await Product.findById(id);
    }

    async getBrands() {
        return await Product.find({}, {brand: 1}).sort({brand: 1}).distinct('brand')
    }
}

export default new ProductService();