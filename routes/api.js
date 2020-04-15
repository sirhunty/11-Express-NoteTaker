// requiring pages and libraries
const router = require("express").Router();
const storage = require("../db/storage").Router();

//GET line; responds with notes from database
router.get("/notes", function(req, res) {
storage
    .getNotes()
    .then(notes => res.json(notes))
    .catch(error +> res.status(500).json(error));
});

//posting a new note or error out 
router.post("/notes", (req, res) => {
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// Delete function/route, deletes note with id that equals to req.params.id
router.delete("/notes/:id", function(req, res) {
    store
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
  });
  
  //export module for router
  module.exports = router;

