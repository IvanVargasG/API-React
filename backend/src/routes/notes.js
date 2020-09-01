const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, DeleteNote, updateNote  } = require('../controllers/notes.controller');

router.route('/')
.get(getNotes)
.post(createNote)

router.route('/:id')
.get(getNote)
.put(updateNote)
.delete(DeleteNote)

module.exports = router;