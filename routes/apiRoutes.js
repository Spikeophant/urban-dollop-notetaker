const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');

router.post('/api/notes', (req, res) => {
  const newNote = req.body;
  let notesList = db;
  notesList.push(newNote);
  console.log(`Writing notes ${notesList}`)
  fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesList), err => console.log(err));
  res.send('Thank you for your note!')
});

router.delete('/api/notes', (req, res) =>{
  console.log(req.body);
})

router.use('/api/notes', (req, res) => {
  res.json(db)
})

module.exports = router;