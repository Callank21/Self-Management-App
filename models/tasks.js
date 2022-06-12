const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.INTEGER,
    },
    // project_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'project',
    //     key: 'id',
    //   },
    // },
    // heading_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'heading',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'task',
  }
);

module.exports = Task;
