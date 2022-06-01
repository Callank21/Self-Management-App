const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Heading extends Model {}

Heading.init(
<<<<<<< HEAD
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
=======
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        heading_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
       project_id: {
           type: DataTypes.INTEGER,
           references: {
               model: 'project',
               key: 'id'
           }
       }
>>>>>>> develop
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //figure out how to take time values from tasks and add them together into this value (in minutes)
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'task',
        key: 'time',
      },
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'heading',
  }
);

module.exports = Heading;
