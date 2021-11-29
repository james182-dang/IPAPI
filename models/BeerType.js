// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// // create BeerType model
// class BeerType extends Model {}

// BeerType.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         beerType: {
//             type: DataTypes.STRING,
//             references: {
//                 model: 'beer',
//                 key: 'beer_type'
//             }
//         },
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'beerType'
//     }
// )