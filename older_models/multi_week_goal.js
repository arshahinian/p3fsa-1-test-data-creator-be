'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Multi_Week_Goal extends Model {    
    static associate({Goal_Week,User_Account}) {
      Multi_Week_Goal.hasMany(Goal_Week, {
        foreignKey: "multi_week_goal_id",
        as: "goal_weeks"
      })
      Multi_Week_Goal.belongsTo(User_Account, {
        foreignKey: "user_account_id",
        as: "user"
      })
    }
  }
  Multi_Week_Goal.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    goal_name: {
      type: DataTypes.STRING,
      allowNull: false
    },    
    goal_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_modified_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_account_id: { 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Multi_Week_Goal',
    tableName: 'multi_week_goal',
    timestamps: false
  });
  return Multi_Week_Goal;
};