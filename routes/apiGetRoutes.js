
const router = require('express').Router();
const db = require('../db/db.json');

router.use('/api/notes', (req, res) => {
  res.json(db)
})

module.exports = router;