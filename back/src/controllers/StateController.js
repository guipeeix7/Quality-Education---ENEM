const {
    getStatesInfo,
    getMoneyInfo,
    getColorByStateInfo,
    getSchoolTypeByState
} = require('../models/StatesModel.js')

const getStateDataCtr = async(req,res) => {
    try{
        stateSigla = req.params.sigla.toUpperCase(); 
        dataResponse = await getStatesInfo(stateSigla)
        console.log(dataResponse)
        res.json(dataResponse)
    }
    catch(err){
        console.log(err)
    }
}
const getMoneyInfoCtr = async(req,res) => {
    try{
        stateSigla = req.params.sigla.toUpperCase(); 
        dataResponse = await getMoneyInfo(stateSigla)
        console.log(dataResponse)
        res.json(dataResponse)
    }
    catch(err){
        console.log(err)
    }
}
const getColorByStateInfoCtr = async(req,res) => {
    try{
        stateSigla = req.params.sigla.toUpperCase(); 
        dataResponse = await getColorByStateInfo(stateSigla)
        console.log(dataResponse)
        res.json(dataResponse)
    }
    catch(err){
        console.log(err)
    }
}
const getSchoolTypeByStateCtr = async(req,res) => {
    try{
        stateSigla = req.params.sigla.toUpperCase(); 
        dataResponse = await getSchoolTypeByState(stateSigla)
        console.log(dataResponse)
        res.json(dataResponse)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    getStateDataCtr,
    getMoneyInfoCtr,
    getColorByStateInfoCtr,
    getSchoolTypeByStateCtr
}