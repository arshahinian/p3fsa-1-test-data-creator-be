'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Account extends Model {    
    static associate({Multi_Week_Goal}) {
      User_Account.hasMany(Multi_Week_Goal, {
        foreignKey: "user_account_id",
        as: "user_goals"
      })
    }
  }
  User_Account.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_modified_by: {
      type: DataTypes.STRING,
      allowNull: false
    }    
  }, {    
    sequelize,
    modelName: 'User_Account',
    tableName: 'user_account',
    timestamps: false    
  });
  return User_Account;
};