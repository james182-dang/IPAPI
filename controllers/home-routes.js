const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Beer } = require('../models');

router.get('/', (req, res) => {
    res.render('login')
});

module.exports = router;