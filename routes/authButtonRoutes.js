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


// Update one Nav Name by its ID
router.patch('/main/patch/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db.updateMainNav(id, changes)
    .then((button) => {
        if (button) {
            res.status(200).json( button );
        } else {
            res.status(404).json({ message: 'Record was not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` });
    });
});


// Delete on Nav Name by its ID
router.delete('/main/delete/:id', (req, res) => {
    const { id } = req.params;

    db.deleteMainNav(id)
    .then(button => {
        if (button > 0 ) {
            res.status(200).json({ message: `${id} was successfully deleted` });
        } else {
            res.status(404).json({ message: 'Record was not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` });
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


// Update one Sub Nav by its ID
router.patch('/sub/patch/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db.updateSubNav(id, changes)
    .then(button => {
        if (button) {
            res.status(200).json( button );
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    }).catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` });
    });
});


// Delete one Sub Nav by its ID
router.delete('/sub/delete/:id', (req, res) => {
    const { id } = req.params;

    db.deleteSubNav(id)
    .then(button => {
        if (button > 0) {
            res.status(200).json({ message: `${id} was successfully deleted` });
        } else {
            res.status(404).json({ message: `Record was not found` });
        }
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


// Update General Content by its ID
router.patch('/content/patch/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db.updateRollContent(id, changes)
    .then(button => {
        if (button) {
            res.status(200).json( button );
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` });
    });
});


// Delete one General Content by its ID
router.delete('/content/delete/:id', (req, res) => {
    const { id } = req.params;

    db.deleteRollContent(id)
    .then(button => {
        if (button > 0) {
            res.status(200).json({ message: `${id} was successfully deleted` });
        } else {
            res.status(404).json({ message: 'Record was not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` });
    });
});


// ----------------Spells
// Add array to Spells
router.post('/content/spells/addSpells', (req, res) => {
    spellsDB.addSpells(req.body)
    .then(spells => {
        res.status(200).json({ spells });
    })
    .catch(error => {
        res.status(500).json({ message: `unable to upload spells: ${error}` });
    });
});


// Update Spell by its ID
router.patch('/content/spells/patch/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    spellsDB.updateSpell(id, changes)
    .then(spells => {
        if (spells) {
            res.status(200).json(spells);
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` });
    });
});


// Delete Spell by its ID
router.delete('/content/spells/delete/:id', (req, res) => {
    const { id } = req.params;

    spellsDB.deleteSpell(id)
    .then(spell => {
        if (spell > 0) {
            res.status(200).json({ message: `${id} was successfully deleted` });
        } else {
            res.status(404).message({ message: 'Record was not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` });
    });
});


module.exports = router;