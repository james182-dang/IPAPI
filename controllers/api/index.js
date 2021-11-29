const router = require('express').Router();

const userRoutes = require('./user-routes');
const beerRoutes = require('./beer-routes');

router.use('/users', userRoutes);
router.use('/beers', beerRoutes);

module.exports = router;