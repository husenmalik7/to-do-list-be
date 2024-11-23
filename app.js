require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const cors = require('cors');
const routes = require('./src/routes/index');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

module.exports = app;