const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
const router = express.Router();

// var routeLocations = require('./src/routes/StateRoutes.js');
var routeLocations = require('./src/routes/baseRoutes.js');
// require('./src/configs/database/database.js');
app.use('/', routeLocations);


app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

