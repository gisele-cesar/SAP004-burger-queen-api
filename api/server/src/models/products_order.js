'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products_Order = sequelize.define('Products_Order', {
    qtde: DataTypes.INTEGER,
    obs: DataTypes.STRING
  }, {});
  Products_Order.associate = function(models) {
    // associations can be defined here
    Products_Order.belongsTo(models.Product, {
      foreignKey: 'productId'
    })
    Products_Order.belongsTo(models.Order, {
      foreignKey: 'orderId'
    })
  };
  return Products_Order;
};