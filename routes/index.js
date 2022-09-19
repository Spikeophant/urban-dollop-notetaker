const express = require('express');
const htmlGetRoutes = require('./htmlGetRoutes');

const app = express();

app.use(htmlGetRoutes);

module.exports = app;