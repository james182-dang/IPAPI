// model associations
const User = require('./User');
const Beer = require('./Beer');

User.hasOne(Beer, {
    foreignKey: 'id'
});

module.exports = { User, Beer };