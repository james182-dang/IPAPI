// model associations
const User = require('./User');
const Beer = require('./Beer');

User.hasOne(Beer, {
    foreignKey: 'user_id'
});

module.exports = { User, Beer };