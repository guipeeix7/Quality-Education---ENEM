var express = require('express')
var router = express.Router();

const{    
    getStateDataCtr,
    getMoneyInfoCtr,
    getColorByStateInfoCtr,
    getSchoolTypeByStateCtr
} = require('./../controllers/StateController.js')

router.get('/:sigla' , getStateDataCtr)
router.get('/:sigla/money-group-info' , getMoneyInfoCtr)
router.get('/:sigla/color-group-info' , getColorByStateInfoCtr)
router.get('/:sigla/school-group-info' , getSchoolTypeByStateCtr)

module.exports = router; 