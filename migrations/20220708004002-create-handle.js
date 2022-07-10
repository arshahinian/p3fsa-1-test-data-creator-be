'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('handles', {      
      handle_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      handle_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      login_code: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      modified_date: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('handles');
  }
};