const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Beer model
class Beer extends Model {}

Beer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        beer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brewery: {
            type: DataTypes.STRING,
            allowNull: true
        },
        beer_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'beer'
    }
);

module.exports = Beer;