const express = require('express');
const db = require('../models/adminHelper');
// const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/', (req, res) => {
    // db.findAllUsers()
    db.find()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((error) => {
        res.status(500).json({ message: 'unable to retrieve users' });
    });
});

router.get('/:username', (req, res) => {
    const { username } = req.params;
    db.findUserByUsername(username)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((error) => {
        res.status(500).json(error)
    });
});

module.exports = router;