const express = require('express');
const db = require('../models/spellModels');

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

router.get('/spellsByLevel/:level', (req, res) => {
    const { level } = req.params;

    db.findSpellsByLevel(level)
    .then(spells => {
        if (spells) {
            res.status(200).json({ spells })
        } else {
            res.status(404).json({ message: 'Record not found' })
        }
    })
    .catch(error => {
        res.status(500).json({ message: `Unable to preform operation: ${error}` })
    });
});

router.get('/spellById/:id', (req, res) => {
    const { id } = req.params;

    db.findSpellByName(id)
    .then(spell => {
        if (spell) {
            res.status(200).json({ spell })
        } else {
            res.status(404).json({ massage: 'Record not found' })
        }
    })
    .catch(error => {
        res.status(500).json({ message: `Unable to preform operation: ${error}` })
    })
})

// -----------------------------------routes for auth spells



module.exports = router;
