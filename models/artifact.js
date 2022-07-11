'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artifact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artifact.init({
    artifact_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    artifact_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artifact_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artifact_value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    artifact_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modified_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    inquest_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Artifact',
    tableName: 'artifacts',
    timestamps: false
  });
  return Artifact;
};