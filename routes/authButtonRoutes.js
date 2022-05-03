const express = require('express');
const db = require('../models/buttonModels');
const spellsDB = require('../models/spellModels');

const router = express.Router();

// ----------------Nav Names
// Add array to Nav Names
router.post('/main/add', (req, res) => {
    db.addMainNav(req.body)
    .then(buttons => {
        res.status(200).json({
            message: `${buttons.length} buttons have been added and they are:`,
            buttons
        });
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` });
    });
});

// Updates one Nav Name by its ID
router.patch('/main/patch/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db.updateMainNav(id, changes)
    .then(button => {
        if (button) {
            res.status(200).json({ button });
        } else {
            res.status(404).json({ message: 'Record was not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` })
    });
});


// ----------------Sub Nav Names
// Add array to Sub Nav Names
router.post('/sub/add', (req, res) => {
    db.addSubNav(req.body)
    .then(buttons => {
        res.status(200).json({
            message: `${buttons.length} buttons have been added and they are:`,
            buttons
        });
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` });
    });
});


// ----------------General Content
// Add array to General Content
router.post('/content/add', (req, res) => {
    db.addRollContent(req.body)
    .then(content => {
        res.status(200).json({
            message: `${content.length} entries in total and they are:`,
            content
         });
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` });
    });
});

// ----------------Spells
// Add array to Spells
router.post('/content/addSpells', (req, res) => {
    spellsDB.addSpells(req.body)
    .then(spells => {
        res.status(200).json({ spells });
    })
    .catch(error => {
        res.status(500).json({ message: `unable to upload spells: ${error}` });
    });
});

module.exports = router;