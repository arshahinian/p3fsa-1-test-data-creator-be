'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inquests', {      
      inquest_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inquest_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      inquest_desc: {
        allowNull: true,
        type: Sequelize.STRING
      },
      inquest_note: {
        allowNull: true,
        type: Sequelize.STRING
      },
      modified_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      handle_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('inquests');
  }
};