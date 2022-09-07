// const { getStatesInfo } = require('./CountryModel.js')

databaseHandler = require('../configs/database/database.js')
sequelize = databaseHandler.sequelize

maritalInfo = require('./tables/stateInfo.js')(sequelize)
municipiosInfo = require('./tables/municipiosInfo.js')(sequelize)
moneyByStateInfoTable = require('./tables/moneyByStateInfo.js')(sequelize)
colorByStateInfoTable = require('./tables/colorByStateInfo.js')(sequelize)
schoolStateInfo = require('./tables/schoolStatesInfo.js')(sequelize)

const getStatesInfo = async(stateSigla) => {
    
    try{
        const data = await stateInfo.findAll({
            attributes: ['NU_GERAL', 'N_SAMPLES'], 
            where: {
                stateSigla: stateSigla
            }
        });
        return JSON.stringify(data, null, 2)
    }
    catch(err){
        console.log(err)
    }
}


const getMoneyInfo = async(stateSigla) => {
    try{
        const data = await moneyByStateInfoTable.findAll({
            attributes: [['q006', 'moneyGroup'], 'N_SAMPLES', 'NU_GERAL_STATE_MONEY'], 
            where: {
                stateSigla: stateSigla
            },
        });
        return JSON.stringify(data, null, 2)
    }
    catch(err){
        console.log(err)
    }
}

const getColorByStateInfo = async(stateSigla) => {
    try{
        const data = await colorByStateInfoTable.findAll({
            attributes: [ 'TP_COR_RACA', 'N_SAMPLES'], 
            where: {
                stateSigla: stateSigla
            }
        })
        return JSON.stringify(data, null, 2)
    }
    catch(err){
        console.log(err)
    }
}

const getSchoolTypeByState = async(stateSigla) => {
    try{
        const data = await schoolStateInfo.findAll({
            attributes: ['TP_ESCOLA','N_SAMPLES'],
            where: {
                stateSigla : stateSigla
            }
        })
        return JSON.stringify(data, null, 2)
    }
    catch(err){
        console.log(err)
    }
}



sequelize = databaseHandler.sequelize


module.exports = {
    getStatesInfo,
    getMoneyInfo,
    getColorByStateInfo,
    getSchoolTypeByState
}