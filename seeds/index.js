const sequelize = require('../config/connection');
const { Product, Tag, ProductTag } = require('../models');
const productSeedData = require('./productSeed.json');
const tagSeedData = require('./tagSeed.json');
const productTagSeedData = require('./productTagSeed.json');
const seedCategories = require('./categorySeed');

const seedProducts = async () => {
  const products = await Product.bulkCreate(productSeedData);
}
const seedTags = async () => {
  const tags = await Tag.bulkCreate(tagSeedData);
}
const seedProductTags = async () => {
  const productTags = await ProductTag.bulkCreate(productTagSeedData);
}
const seedDatabase = async () => {
 await sequelize.sync({ force: true });

 await seedCategories();

 await seedProducts();

 await seedTags();

 await seedProductTags();

  process.exit(0);
};

seedDatabase();
