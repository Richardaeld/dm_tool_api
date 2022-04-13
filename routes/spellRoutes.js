const express = require('express');
const db = require('../models/spellHelper');

const router = express.Router();


router.get('/', (req, res) => {
    db.findSpells()
    .then(spells => {
        res.status(200).json({ message: `you are in spells with: ${spells.length} spells`, spells });
    })
    .catch(error => {
        res.status(500).json({ message: `cannot fetch spells ${error}`})
    })
});


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

// router.post('/levels/addMany', (req, res) => {
//     db.addManyLevels()
//     .then(levels => {
//         res.status(200).json({ message:`You have added: ${levels.length} levels`, levels })
//     })
//     .catch(error => {
//         res.status(500).json({ message: `something went wrong: ${error}` })
//     })
// })


router.post('/addMany', (req, res) => {
    db.addManySpells(req.body)
        .then(spells => {
            res.status(200).json(spells);
        })
        .catch(error => {
            res.status(500).json({ message: `unable to upload spells: ${error}` })
        })
})


module.exports = router;
