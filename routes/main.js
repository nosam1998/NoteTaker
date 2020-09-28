const express = require('express');
const router = express.Router();
const noteDB = require("../db/db")
const path = require("path");


/* GET home page. */
router.get('/', function (req, res) {
    res.sendFile(path.resolve("public/index.html"));
});

router.get('/notes', function (req, res) {
    res.sendFile(path.resolve("public/notes.html"));
});

module.exports = router;