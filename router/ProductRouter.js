import { Router } from 'express';
import ProductController from '../controller/ProductController.js';

const ProductRouter = new Router();

ProductRouter.get('/products', ProductController.getAll);
ProductRouter.get('/products/:id', ProductController.getOne);
ProductRouter.post('/products', ProductController.create);

export default ProductRouter;
