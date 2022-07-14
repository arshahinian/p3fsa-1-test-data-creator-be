'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goal_Day extends Model {    
    static associate({Goal_Week}) {
      Goal_Day.belongsTo(Goal_Week, {
        foreignKey: "goal_week_id",
        as: "goal_week"
      })
    }
  }
  Goal_Day.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    goal_day_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    duration_unit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    distance:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    distance_unit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mood_index: {
      type: DataTypes.INTEGER,
      allowNull: true
    },    
    goal_week_id: { 
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
    modelName: 'Goal_Day',
    tableName: 'goal_day',
    timestamps: false
  });
  return Goal_Day;
};