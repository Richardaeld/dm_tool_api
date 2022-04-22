const express = require('express');
const db = require('../models/buttonHelper');

const router = express.Router();

//  main_nav_buttons sub_nav_buttons sub_nav_roll_content
// addMainNav,
// viewAllMainNav,
// viewMainNav,
// addSubNav,
// viewAllSubNav,
// viewSubNav,
// addRollContent,
// viewAllRollContent,
// viewRollContent
// ----------------Main Nav
router.post('/main/add', (req, res) => {
    db.addMainNav(req.body)
    .then(buttons => {
        res.status(200).json({ message: `${buttons.length} buttons have been added and they are: ${buttons}` })
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` })
    });
});

router.get('/main/viewAll', (req, res) => {
    db.viewAllMainNav()
    .then(buttons => {
        res.status(200).json({ message: `${buttons.length} buttons in total and they are: ${buttons}` })
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` })
    });
});

// ----------------Sub Nav
router.post('sub/add', (req, res) => {
    db.addSubNav(req.body)
    .then(buttons => {
        res.status(200).json({ message: `${buttons.length} buttons have been added and they are: ${buttons}` })
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` })
    });
});

router.get('sub/viewAll', (req, res) => {
    db.viewAllSubNav()
    .then(buttons => {
        res.status(200).json({ message: `${buttons.length} buttons in total and they are: ${buttons}` })
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` })
    });
});

// ----------------Roll Content
router.post('content/add', (req, res) => {
    db.addRollContent(req.body)
    .then(content => {
        res.status(200).json({ message: `${content.length} entries in total and they are: ${content}` })
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` })
    });
});

router.get('content/viewAll', (req, res) => {
    db.viewAllRollContent()
    .then(content => {
        res.status(200).json({ message: `${content.length} entries in total and they are: ${content}` })
    })
    .then(error => {
        res.status(200).json({ message: `An error occured: ${error}` })
    });
});

module.exports = router;