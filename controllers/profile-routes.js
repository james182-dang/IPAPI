const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { User, Beer } = require('../models');

router.get('/', (req, res) => {
    User.findOne({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'username',
            'first_name',
            'favorite'
        ]
    })
      .then(dbUserData => {
          const user = dbUserData.map(user => user.get({ plain: true }));
          res.render('profile', { User, loggedIn: true });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/messaging', (req, res) => {
    User.findOne({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'username',
            'first_name',
            'favorite'
        ]
    })
      .then(dbUserData => {
          const user = dbUserData.map(user => user.get({ plain: true }));
          res.render('messaging', { User, loggedIn: true });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;