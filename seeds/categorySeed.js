const { Category } = require('../models');

const categoryData = [
  {
      "category_name": "shirts"
  },
  {
      "category_name": "pants"
  },
  {
      "category_name": "hats"
  },
  {
      "category_name": "jackets"
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;