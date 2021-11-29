const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Beer } = require('../models');

router.get('/', (req, res) => {
    res.render('signup')
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('profile');
        return;
    }

    res.render('login')
});

module.exports = router;