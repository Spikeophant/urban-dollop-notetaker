const express = require('express');
const htmlGetRoutes = require('./htmlGetRoutes');
const apiGetRoutes = require('./apiGetRoutes');

const app = express();
//api first, wildcard is in html.
app.use(apiGetRoutes);
app.use(htmlGetRoutes);


module.exports = app;