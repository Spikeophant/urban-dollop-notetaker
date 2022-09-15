const express = require('express');
const path = require('path');

//setup app.
const app = express();

app.use(express.static('./public'));

app.get('/', path.join(__dirname, '/public/index.html'));
