const express = require('express');
const db = require('../models/dbfunc');

const router = express.Router();


router.post('/api/buttons/addMany', (req, res) => {
    db.addMany(req.body)
        .then(diceButtons => {
            res.status(200).json(diceButtons);
        })
        .catch(error => {
            res.status(500).json({ message: `Unable to upload buttons: ${error}`})
        })
});











module.exports = router;