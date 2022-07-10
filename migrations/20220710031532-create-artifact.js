'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('artifacts', {
      artifact_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artifact_name: {
        allowNull: false,
        type: Sequelize.STRING
      },      
      artifact_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      artifact_value: {
        allowNull: true,
        type: Sequelize.STRING
      },
      artifact_code: {
        allowNull: true,
        type: Sequelize.STRING
      },
      modified_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      inquest_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('artifacts');
  }
};