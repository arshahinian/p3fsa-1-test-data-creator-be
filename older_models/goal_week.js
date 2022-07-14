'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goal_Week extends Model {
    static associate({Goal_Day,Multi_Week_Goal}) {
      Goal_Week.hasMany(Goal_Day, {
        foreignKey: "goal_week_id",
        as: "goal_days"
      })
      Goal_Week.belongsTo(Multi_Week_Goal, {
        foreignKey: "multi_week_goal_id",
        as: "goal"
      })
    }
  }
  Goal_Week.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    goal_week_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    multi_week_goal_id: { 
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
    }
  }, {
    sequelize,
    modelName: 'Goal_Week',
    tableName: 'goal_week',
    timestamps: false
  });
  return Goal_Week;
};