const path = require("path");
const router = require("express").Router();

// Notes responds with the notes.html file
router.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// The other routes respond with the index.html file
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//export module for router
module.exports = router;