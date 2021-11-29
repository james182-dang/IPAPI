const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create BeerType model
class BeerType extends Model {}

BeerType.init(
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
        beerType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        beers: {
            type: DataTypes.INTEGER,
            references: {
                model: 'beer',
                key: 'id'
            }
        },
        users: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'favorite'
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'BeerType'
    }
);

module.exports = BeerType;