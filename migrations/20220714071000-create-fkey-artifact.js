'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('artifacts', {
        fields: ['inquest_id'],
        type: 'foreign key',
        name: 'cc_artifact_inquest_id', // optional
        references: {
          table: 'inquests',
          field: 'inquest_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('artifacts', 'cc_artifact_inquest_id');
  }
};