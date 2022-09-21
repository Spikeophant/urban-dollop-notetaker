const express = require('express');
const htmlGetRoutes = require('./htmlGetRoutes');
const apiRoutes = require('./apiRoutes');


const app = express();
//api first, wildcard is in html.
app.use(apiRoutes);
app.use(htmlGetRoutes);



module.exports = app;