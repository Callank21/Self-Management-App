const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Heading extends Model {}

Heading.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //figure out how to take time values from tasks and add them together into this value
        time: {
            type: DataTypes.INTEGER,
            allowNull: false,
       },
       project_id: {
           type: DataTypes.INTEGER,
           references: {
               model: 'project',
               key: 'id'
           }
       }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'heading'
    }
);

module.exports = Heading;