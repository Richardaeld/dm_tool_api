const express = require('express');
const db = require('../models/adminModels');
// import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// ---------------- Admin Routes
// View all Admin
router.get('/', (req, res) => {
    db.findAll()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((error) => {
        res.status(500).json({ message: 'unable to retrieve users' });
    });
});

// View one admin by username
router.get('/:username', (req, res) => {
    const { username } = req.params;
    db.findUsername(username)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((error) => {
        res.status(500).json(error);
    });
});

module.exports = router;