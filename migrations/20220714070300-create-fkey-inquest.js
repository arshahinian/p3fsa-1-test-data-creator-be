'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('inquests', {
        fields: ['handle_id'],
        type: 'foreign key',
        name: 'cc_inquest_handle_id', // optional
        references: {
          table: 'handles',
          field: 'handle_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('inquests', 'cc_inquest_handle_id');
  }
};

