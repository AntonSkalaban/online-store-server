import Category from '../model/Category.js';

class CategoryService {
  async create(category) {
    const createdCategory = await Category.create(category);
    return createdCategory;
  }

  async getAll() {
    const categories = await Category.find().sort({ name: 1 })
    return categories;
  }
}

export default new CategoryService();
