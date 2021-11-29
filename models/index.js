// model associations
const User = require('./User');
const Beer = require('./Beer');

User.belongsTo(Beer, {
    foreignKey: 'favorite'
});

module.exports = { User, Beer };