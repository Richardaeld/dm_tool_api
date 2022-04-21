const express = require('express');
const db = require('../models/diceHelper');

const router = express.Router();

router.get('/', (req, res) => {
    db.findAllDice()
    .then((dice) => {
        res.status(200).json({dice});
    })
    .catch((error) => {
        res.status(500).json({ message: `Unable to retrieve dice: ${error}` });
    });
});


router.get('/addDice', (req, res) => {
    db.addDice(req.body)
    .then((dice) => {
        res.status(200).json(dice);
    })
    .catch((error) => {
        res.status(500).json({ message: `Unable to upload dice: ${error}` });
    });
});


module.exports = router;