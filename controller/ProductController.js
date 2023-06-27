import ProductService from "../service/ProductService.js";

class ProductController {
    async create(req, res) {
        try {
            const product = await ProductService.create(req.body)
            res.json(product)
        } catch(e){ 
            res.status(500).json(e)
            console.log(e.message);
        }
    }

    async getAll(req, res) {
        try {
            const products = await ProductService.getAll(req.query);       
            return res.json(products)
        } catch(e){ 
            res.status(500).json(e)
            console.log(e.message);
        }
    }

    async getOne(req, res) {
        try {
            const product = await ProductService.getOne(req.params.id)
            return res.json(product)
        } catch(e){ 
            res.status(500).json(e)
            console.log(e.message);
        }   
    }

    async getBrands(req, res) {
        try {
            const brands = await ProductService.getBrands()
            return res.json(brands)
        } catch(e){ 
            res.status(500).json(e)
            console.log(e.message);
        }   
    }
}

export default new ProductController()