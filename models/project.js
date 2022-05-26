const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        project_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //figure out how to take the time values from heading and aggregate them into a single number (in minutes)
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'
    }
)

module.exports = Project;