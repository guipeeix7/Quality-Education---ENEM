const  { 
    getStatesInfo,
    getColorInfo,
    getCitiesInfo,
    getMaritalInfo,
    getMunicipiosInfo,
    getSchoolTypeInfo,
    getSchoolColorTypeInfo
} = require('../models/CountryModel.js')

const getStatesData = async(req, res) => {
    // console.log(getAllStates)
    jsonObj = await getStatesInfo()
    console.log(jsonObj)
    res.json(jsonObj)
}

const getColorData = async(req, res) => {
    // console.log(getAllStates)
    jsonObj = await getColorInfo()
    console.log(jsonObj)
    res.json(jsonObj)
}

const getCitiesData = async(req, res) => {
    // console.log(getAllStates)
    jsonObj = await getCitiesInfo()
    console.log(jsonObj)
    res.json(jsonObj)
}

const getMaritalData = async(req, res) => {
    // console.log(getAllStates)
    jsonObj = await getMaritalInfo()
    console.log(jsonObj)
    res.json(jsonObj)
}

const getMunicipiosData = async(req, res) => {
    // console.log(getAllStates)
    jsonObj = await getMunicipiosInfo()
    console.log(jsonObj)
    res.json(jsonObj)
}


const getSchoolTypeData = async(req, res) => {
    // console.log(getAllStates)
    jsonObj = await getSchoolTypeInfo()
    console.log(jsonObj)
    res.json(jsonObj)
}


const getSchoolColorTypeData = async(req, res) => {
    jsonObj = await getSchoolColorTypeInfo()
    console.log(jsonObj)
    res.json(jsonObj)
}



module.exports = {
    getStatesData,
    getColorData,
    getCitiesData,
    getMaritalData,
    getMunicipiosData,
    getSchoolTypeData,
    getSchoolColorTypeData
}
// const  { 
//     getAllStates,
// } = require('../models/getSimpleInfoModel.js')

// const getCitiesInfo = async(req, res) => {
//     // console.log(getAllStates)
//     jsonObj = await getAllStates()
//     console.log(jsonObj)
//     res.json(jsonObj)
// }

// module.exports = {
//     getCitiesInfo
// }