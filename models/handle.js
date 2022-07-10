'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Handle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Handle.init({
    handle_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    handle_name: {
      type: DataTypes.STRING,
      allowNull: false
    },    
    login_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },    
    modified_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {    
    sequelize,
    modelName: 'Handle',
    tableName: 'handle',
    timestamps: false
  });
  return Handle;
};