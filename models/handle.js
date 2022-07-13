'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {  
  class Handle extends Model {    
    static associate({Inquest}) {
      Handle.hasMany(Inquest, {
        foreignKey: "handle_id",
        as: "handles"
      })
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
    tableName: 'handles',
    timestamps: false
  });
  return Handle;
};