let express = require('express');
let bodyParser = require('body-parser');

 module.exports = () => {
    console.log('Carregando modulo do express');

    let app = express();

    app.use( bodyParser.urlencoded({extended: true}) );
    app.use( bodyParser.json() );

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    return app;
 };