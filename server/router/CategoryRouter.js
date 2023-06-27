import { Router } from "express";
import CategoryController from "../controller/CategoryController.js";

const CategoryRouter = new Router();

CategoryRouter.get('/categories', CategoryController.getAll);
CategoryRouter.post('/categories', CategoryController.create);   

export default CategoryRouter;