
databaseInfo = require('./database_info')
// databaseInfo = require('./../../models')
const Automate = require('sequelize-automate');

automate = [];

if(databaseInfo['autoUpdateLocal'] === true){
    const dbOptions = {
        database: databaseInfo['database'],
        username: databaseInfo['user'],
        password: databaseInfo['password'],
        dialect: databaseInfo['dialect'],
        host: databaseInfo['host'],
        port: databaseInfo['port'],
        define: {
          underscored: false,
          freezeTableName: false,
          charset: 'utf8mb4',
          timezone: '-03:00',
          dialectOptions: {
            collate: 'utf8_general_ci',
          },
          timestamps: false,
        },
      };
      
      // Automate options
      const options = {
        type: 'js', // Which code style want to generate, supported: js/ts/egg/midway. Default is `js`.
        camelCase: true, // Model name camel case. Default is false.
        fileNameCamelCase: true, // Model file name camel case. Default is false.
        dir: '../back/src/models/tables', // What directory to place the models. Default is `models`.
        typesDir: '../back/src/models/tables', // What directory to place the models' definitions (for typescript), default is the same with dir.
        emptyDir: true, // Remove all files in `dir` and `typesDir` directories before generate models.
        tables: null, // Use these tables, Example: ['user'], default is null.
        skipTables: null, // Skip these tables. Example: ['user'], default is null.
        tsNoCheck: false, // Whether add @ts-nocheck to model files, default is false.
        match: null, // RegExp to match table name
      }
      
      const automate = new Automate(dbOptions, options);
      
      (async function main() {
 
        // or generate codes
        const code = await automate.run();
        // console.log(code);
      
        console.log('sequelize updated from database')
    })()
}
exports.automate = automate;
// Database options, is the same with sequelize constructor options.


