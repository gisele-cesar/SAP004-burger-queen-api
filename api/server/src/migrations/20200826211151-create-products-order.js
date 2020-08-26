'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products_Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Products', key:'id'}
      },
      orderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Orders', key:'id'}
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      add_egg: {
        type: Sequelize.BOOLEAN
      },
      add_cheese: {
        type: Sequelize.BOOLEAN
      },
      status_order: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products_Orders');
  }
};