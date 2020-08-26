'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products_Order = sequelize.define('Products_Order', {
    active: DataTypes.BOOLEAN,
    add_egg: DataTypes.BOOLEAN,
    add_cheese: DataTypes.BOOLEAN,
    status_order: DataTypes.STRING
  }, {});
  Products_Order.associate = function(models) {
    // associations can be defined here
    Products_Order.belongsTo(models.Product)
    Products_Order.belongsTo(models.Order)
  };
  return Products_Order;
};