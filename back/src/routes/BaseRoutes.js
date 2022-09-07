var express = require('express');
var router = express.Router();

var StateRoutes = require('./StatesRoutes.js');
var CountryRoutes = require('./CountryRoutes.js');

router.use('/state', StateRoutes);
router.use('/country', CountryRoutes);

module.exports = router;
