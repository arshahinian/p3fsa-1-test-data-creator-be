'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {  
  class Inquest extends Model {    
    static associate({Artifact, Handle}) {
      Inquest.hasMany(Artifact, {
        foreignKey: "inquest_id",
        as: "artifacts"
      })
      Inquest.belongsTo(Handle, {
        foreignKey: "handle_id",
        as: "user"
      })
    }
  }
  Inquest.init({
    inquest_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    inquest_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inquest_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inquest_note: {
      type: DataTypes.STRING,
      allowNull: true
    },    
    modified_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    handle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Inquest',
    tableName: 'inquests',
    timestamps: false
  });
  return Inquest;
};