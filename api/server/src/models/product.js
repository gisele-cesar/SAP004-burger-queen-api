'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name_item: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    is_burger: DataTypes.BOOLEAN,
    has_extra: DataTypes.BOOLEAN
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.Products_Order)
  };
  return Product;
};