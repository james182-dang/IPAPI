const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// get specific user
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// create a user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        first_name: req.body.first_name,
        state: req.body.state
    })
      .then(dbUserData => {
          req.session.save(() => {
              req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json(dbUserData);
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// POST route for login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        }
    })
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({ message: 'No user with that username!' });
              return;
          }

          const validPassword = dbUserData.checkPassword(req.body.password);
          if (!validPassword) {
              res.status(400).json({ message: 'Incorrect Password' });
              return;
          }

          req.session.save(() => {
              req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json({ user: dbUserData, message: 'You are logged in!' });
          });
      });
});

// POST for logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
});

// PUT for updating user data
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
      .then(dbUserData => {
          if (!dbUserData[0]) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// Delete user (this may need more work, will test at later point)
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;