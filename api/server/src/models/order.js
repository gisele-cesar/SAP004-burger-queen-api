'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    active: DataTypes.BOOLEAN,
    table: DataTypes.INTEGER,
    client: DataTypes.STRING,
    item: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};