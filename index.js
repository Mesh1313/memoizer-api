const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./src/db.js');
const api = require('./src/endpoints');
const logger = require('./src/logger');
const config = require('./config');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
app.use('/api', api);

db.connectToDb();

app.listen(config.port, () => {
	console.log(`API SERVER STARTED ON PORT ${config.port}...`);
});