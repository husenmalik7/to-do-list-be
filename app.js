require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const router = require('./src/routes/index');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.get('/', (req, res) => {
	res.send(`Hello World!`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
