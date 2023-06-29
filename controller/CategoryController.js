import CategoryService from '../service/CategoryService.js';

class CategoryController {
  async create(req, res) {
    try {
      const category = await CategoryService.create(req.body);
      res.json(category);
    } catch (e) {
      res.status(500).json(e);
      console.log(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const categories = await CategoryService.getAll();
      return res.json(categories);
    } catch (e) {
      res.status(500).json(e);
      console.log(e.message);
    }
  }
}

export default new CategoryController();
