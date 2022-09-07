databaseHandler = require('../configs/database/database.js')

sequelize = databaseHandler.sequelize
stateInfo = require('./tables/stateInfo.js')(sequelize)
citiesInfo = require('./tables/citiesInfo.js')(sequelize)
colorInfo = require('./tables/colorInfo.js')(sequelize)
maritalInfo = require('./tables/maritalInfo.js')(sequelize)
municipiosInfo = require('./tables/municipiosInfo.js')(sequelize)
schoolTypeInfo = require('./tables/schoolTypeInfo.js')(sequelize)
typeColorInfo = require('./tables/typeColorInfo.js')(sequelize)

let getStatesInfo = async(req, res) => {
    try{
        const states = await stateInfo.findAll();
        return JSON.stringify(states, null, 2)
    }
    catch(err){
        console.log(err)
    }
} 

let getColorInfo = async(req, res) => {
    try{
        const usersObj = await colorInfo.findAll();
        return JSON.stringify(usersObj, null, 2)
    }
    catch(err){
        console.log(err)
    }
} 

let getCitiesInfo = async(req, res) => {
    try{
        const citiesInfoObj = await citiesInfo.findAll();
        return JSON.stringify(citiesInfoObj, null, 2)
    }
    catch(err){
        console.log(err)
    }
} 

let getMaritalInfo = async(req, res) => {
    try{
        const maritalInfoObj = await maritalInfo.findAll();
        return JSON.stringify(maritalInfoObj, null, 2)
    }
    catch(err){
        console.log(err)
    }
} 

let getMunicipiosInfo = async(req, res) => {
    try{
        const municipiosInfoObj = await municipiosInfo.findAll();
        return JSON.stringify(municipiosInfoObj, null, 2)
    }
    catch(err){
        console.log(err)
    }
} 

let getSchoolTypeInfo = async(req, res) => {
    try{
        const schoolTypeInfoObj = await schoolTypeInfo.findAll();
        return JSON.stringify(schoolTypeInfoObj, null, 2)
    }
    catch(err){
        console.log(err)
    }
} 
let getSchoolColorTypeInfo = async(req, res) => {
    const schoolTypeInfoObj = [];  
    try{
        schoolTypeInfoObj[0] = await typeColorInfo.findAll({  
            where: {"tpEscola" : "Não Respondeu"}
        });

        schoolTypeInfoObj[1] = await typeColorInfo.findAll({  
            where: {"tpEscola" : "Pública"}
        });

        schoolTypeInfoObj[2] = await typeColorInfo.findAll({  
            where: {"tpEscola" : "Privada"}
        });

        return JSON.stringify(schoolTypeInfoObj, null, 2)
    }
    catch(err){
        console.log(err)
    }
} 


module.exports = {
    getStatesInfo,
    getColorInfo,
    getCitiesInfo,
    getMaritalInfo,
    getMunicipiosInfo,
    getSchoolTypeInfo,
    getSchoolColorTypeInfo
}