var express = require('express');
var router = express.Router();

const  {
    getStatesData,
    getColorData,
    getCitiesData,
    getMaritalData,
    getMunicipiosData,
    getSchoolTypeData,
    getSchoolColorTypeData
} = require('../controllers/CountryController.js')


router.get('/states', getStatesData)
router.get('/colors', getColorData)
router.get('/cities', getCitiesData)
router.get('/marital-status', getMaritalData)
// router.get('/municipios/:id', getMunicipiosData)
router.get('/school-type', getSchoolTypeData)
router.get('/school-and-colors', getSchoolColorTypeData)



module.exports = router;
