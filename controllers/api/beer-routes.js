const router = require('express').Router();
const { Beer } = require('../../models');

// GET /api/beers
router.get('/', (req, res) => {
    Beer.findAll({
        attributes: ['id', 'beer_name', 'beer_type', 'brewery']
    })
      .then(dbBeerData => res.json(dbBeerData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// get specific beer by id
router.get('/:id', (req, res) => {
    Beer.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'beer_name', 'beer_type', 'brewery']
    })
      .then(dbBeerdata => {
          if (!dbBeerData) {
              res.status(404).json({ message: 'No beer found with this id' });
              return;
          }

          res.json(dbBeerData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// create beer
router.post('/', (req, res) => {
    Beer.create({
        beer_name: req.body.beer_name,
        beer_type: req.body.beer_type,
        brewery: req.body.brewery
    })
      .then(dbBeerData => res.json(dbBeerData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// delete beer
router.delete('/:id', (req, res) => {
    Beer.destroy({
        where: {
            id: req.params.id
        }
    })
      .then(dbBeerData => {
          if (!dbBeerData) {
              res.status(404).json({ message: 'No beer found with this id' });
              return;
          }

          res.json(dbBeerData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;