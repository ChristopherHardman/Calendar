const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const router = require('./router');


app.use(cors());
app.use(bodyParser.json());
app.use(router);


app.listen(3000, function () {
  console.log('Listening on port 3000!')
});
