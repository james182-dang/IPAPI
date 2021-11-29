// model associations
const User = require('./User');
const Beer = require('./Beer');
const BeerType = require('./BeerType');

User.hasOne(BeerType, {
    foreignKey: 'favorite'
});

Beer.hasOne(BeerType, {
    foreignKey: 'beer_type'
});

BeerType.hasMany(Beer, {
    foreignKey: 'beer_type'
});

BeerType.hasMany(User, {
    foreignKey: 'favorite'
});

module.exports = { User, Beer, BeerType };