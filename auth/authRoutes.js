const express = require('express');
const db = require('../models/adminModels');
const bcrypt = require('bcryptjs');
const generateToken = require('./generateToken');

const router = express.Router();

// ----------------Auth
// Add one Admin
router.post('/register', (req, res) => {
    const credentials = req.body;
    const {username, password } = credentials;

    if (!(username && password)) {
        return res.status(400).json({ message: "Please enter both Username and password"});
    }

    const hash = bcrypt.hashSync(credentials.password, 12);
    credentials.password = hash;

    db.addUser(credentials)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => {
            if (error.errno == 2067) {
                res.status(400).json({ message: "Username is already taken"});
            } else {
                res.status(500).json(error);
            }
        });
});

// Login One Admin
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!(username && password)) {
        return res.status(400).json({ message: "Please enter both Username and password" });
    }

    db.findUsername(username)
    .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);

            res.status(200).json({ message: `welcome ${user.username}!`, token});
        } else {
            res.status(401).json({ message: "Invalid credentials"});
        }
    })
    .catch((error) => {
        res.status(500).json(error);
    });
});

module.exports = router;