const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');

router.post('/api/notes', (req, res) => {
  const newNote = req.body;
  let notesList = db;
  for (const note in notesList) {
    if (note !== Number(notesList[note].id)) {
      notesList[note].id = Number(note) + 1;
    }
  }
  newNote.id = notesList.length + 1;
  notesList.push(newNote);
  fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesList), err => err);
  res.send('Thank you for your note!');
});

router.delete('/api/notes/*', (req, res) =>{
  let notesList = db;
  for (const note in notesList) {
    if (notesList[note].id === Number(req.params[0])) {
      notesList.splice(note, 1);
    }
    if (note !== Number(notesList[note].id)) {
      notesList[note].id = Number(note) + 1;
    }
    }
  fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesList), err => err);
  res.send('Done.');
})

router.use('/api/notes', (req, res) => {
  res.json(db);
})

module.exports = router;