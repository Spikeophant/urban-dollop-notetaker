const express = require('express');
const path = require('path');

//setup app.
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.file(path.join(__dirname, '/public/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  if (err) console.log('Error with express setup.');
  console.log('Server is listening on Port', port);
});
