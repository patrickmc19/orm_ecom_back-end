// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'primary_cat'
});

// Categories have many Products
Category.hasMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_cat'
});

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};