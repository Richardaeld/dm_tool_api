const express = require('express');
const db = require('../models/spellHelper');

const router = express.Router();

// -----------------------------------routes for spells
router.get('/', (req, res) => {
    db.findAllSpells()
    .then(spells => {
        res.status(200).json({ message: `you are in spells with: ${spells.length} spells`, spells });
    })
    .catch(error => {
        res.status(500).json({ message: `cannot fetch spells ${error}`})
    })
});

// -----------------------------------routes for auth spells
router.post('/addSpells', (req, res) => {
    db.addSpells(req.body)
        .then(spells => {
            res.status(200).json(spells);
        })
        .catch(error => {
            res.status(500).json({ message: `unable to upload spells: ${error}` })
        })
})


module.exports = router;
