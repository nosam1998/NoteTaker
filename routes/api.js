const path = require('path');
const fs = require('fs')
const express = require('express');
const router = express.Router();
const {
    v4: uuidv4
} = require('uuid');


const deleteRecord = (i) => {
    let file_path = path.resolve("db/db.json");
    let temp = fs.readFileSync(file_path, 'utf8');

    temp = JSON.parse(temp);
    temp.splice(temp.findIndex(e => e.name === i), 1);

    fs.writeFileSync(file_path, JSON.stringify(temp))
}

const getDB = () => {
    let file_path = path.resolve("db/db.json");
    let db = fs.readFileSync(file_path, 'utf8');
    return JSON.parse(db);
}

const appendRecord = (data) => {
    let file_path = path.resolve("db/db.json");
    let temp = fs.readFileSync(file_path, 'utf8');

    temp = JSON.parse(temp);
    temp.push(data);

    fs.writeFileSync(file_path, JSON.stringify(temp))
}


router.get("/notes", function (req, res) {
    let db_json = getDB();
    res.json(db_json);

    // res.json(getDB());
});


router.post("/notes", function (req, res) {
    let temp_note = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text,
    }
    appendRecord(temp_note);
    res.json(getDB());
});


router.delete("/notes/:id", function (req, res) {
    deleteRecord(req.params.id)
    res.json(getDB())
});

module.exports = router;