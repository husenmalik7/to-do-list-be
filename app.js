const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./src/routes/index');
app.use('/', routes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

module.exports = app;
