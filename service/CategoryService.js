import Category from '../model/Category.js';

class CategoryService {
    async create(category) {
        const createdCategory = await Category.create(category)
        return createdCategory;
    }

    async getAll() {
        const categories = await Category.find()
        return categories;
    }
}

export default new CategoryService();