'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    active: DataTypes.BOOLEAN,
    client_name: DataTypes.STRING,
    table_number: DataTypes.DECIMAL(10,2),
    items: DataTypes.VIRTUAL
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.hasMany(models.Products_Order, {
      foreignKey: 'orderId'
    })
  };
  return Order;
};