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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        abv: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ibu: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        srm: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        upc: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'beer'
    }
);