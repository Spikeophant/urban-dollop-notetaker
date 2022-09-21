const express = require('express');
const path = require('path');
const routes = require('./routes');

//setup app.
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  if (err) console.log('Error with express setup.');
  console.log('Server is listening on Port', port);
});

