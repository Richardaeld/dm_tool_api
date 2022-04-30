const express = require('express');
const db = require('../models/spellHelper');

const router = express.Router();


router.get('/test123', (req, res) => {
    db.updateManyToManySpells()
})

// -----------------------------------routes for classes

router.get('/classes', (req, res) => {
    db.findClasses()
    .then(classes => {
        res.status(200).json({ message: "These are classes available: ", classes })
    })
    .catch(error => {
        res.status(500).json({ message: `Error retrieving information: ${error}` })
    })
})


router.post('/classes/addMany', (req, res) => {
    db.addClasses(req.body)
    .then(classes => {
        res.status(200).json({ message: `You have added: ${classes.length} classes and they are: ${classes}` })
    })
    .catch(error => {
        res.status(500).json({ message: `There was an error: ${error}` })
    })
})

// -----------------------------------routes for levels


router.get('/level/:id', (req, res) => {

    const{ id } = req.params;

    db.findLevel(id)
    .then(levels => {
        // console.log(levels.length)
        if (!levels.length){
            res.status(404).json({ message: `level ${id} not found` })

        } else {
            res.status(200).json({ message: "you are in levels", levels})
        }
    })
    .catch(error => {
        res.status(500).json({ message: `unable to find levels: ${error}`})
    })
})


router.get('/levels', (req, res) => {
    db.findLevels()
    .then(levels => {
        res.status(200).json({ message: "you are in levels", levels})
    })
    .catch(error => {
        res.status(500).json({ message: `unable to find levels: ${error}`})
    })
})


router.post('/levels/addMany', (req, res) => {
    db.addLevel(req.body)
    .then(levels => {
        res.status(200).json({ message:`You have added: ${levels.length} levels`, levels })
    })
    .catch(error => {
        res.status(500).json({ message: `something went wrong: ${error}` })
    })
})

// -----------------------------------routes for spells

router.get('/', (req, res) => {
    // db.findSpells()
    db.find()
    .then(spells => {
        res.status(200).json({ message: `you are in spells with: ${spells.length} spells`, spells });
    })
    .catch(error => {
        res.status(500).json({ message: `cannot fetch spells ${error}`})
    })
});


router.post('/addMany', (req, res) => {
    db.addSpells(req.body)
        .then(spells => {
            res.status(200).json(spells);
        })
        .catch(error => {
            res.status(500).json({ message: `unable to upload spells: ${error}` })
        })
})


module.exports = router;
