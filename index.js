const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 8000;

const bodyParser = require('body-parser');

const root = __dirname.replace("server","dist")

const api = require('./modules/api').api;


//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app
	.use(express.static(root))
	.use(bodyParser.urlencoded({extended: true}))
	.use(bodyParser.json())
	.use(allowCrossDomain);

app
	.get('/list', api.getItems)
	.post('/add', api.addItem )

server.listen(port);
