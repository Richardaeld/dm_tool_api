const express = require('express');
const db = require('../models/buttonHelper');

const router = express.Router();

//  main_nav_buttons sub_nav_buttons sub_nav_roll_content
// viewAllMainNav,
// viewMainNav,
// viewAllSubNav,
// viewSubNav,
// viewAllRollContent,
// viewRollContent
// ----------------Main Nav
router.get('/main/viewAll', (req, res) => {
    db.viewAllMainNav()
    .then(buttons => {
        res.status(200).json({
            message: `${buttons.length} buttons in total and they are:`,
            buttons
        })
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` })
    });
});

router.get('/main/viewOne/:id', (req, res) => {
    const { id } = req.params;

    db.viewMainNav(id)
    .then(button => {
        if (button) {
            res.status(200).json({ button })
        } else {
            res.status(404).json({ message: 'Record was not found' })
        }
    })
    .catch(error => {
        res.status(500).json({ message: `Unable to preform operation: ${error}` })
    })
})

router.get('/main/viewAll/children/:id', (req, res) => {
    const { id } = req.params;

    db.viewMainAllChildren(id)
    .then(button => {
        if (button) {
            res.status(200).json({ button })
        } else {
            res.status(404).json({ message: 'Record was not found' })
        }
    })
    .catch(error => {
            res.status(500).json({ message: `Unable to preform operation: ${error}` })
    })
})

// ----------------Sub Nav
router.get('/sub/viewAll', (req, res) => {
    db.viewAllSubNav()
    .then(buttons => {
        res.status(200).json({
            message: `${buttons.length} buttons in total and they are:`,
            buttons
        })
    })
    .catch(error => {
        res.status(500).json({ message: `An error occured: ${error}` })
    });
});

router.get('sub/viewOne/:id', (req, res) => {
    const { id } = req.params;

    db.viewSubNav(id)
    .then(button => {
        if (button) {
            res.status(200).json({ button })
        } else {
            res.status(404).json({ message: 'Record not found' })
        }
    })
    .catch(error => {
        res.status(500).json({ message: `Unable to preform operation: ${error}`  })
    });
});

router.get('/sub/viewAll/children/:id', (req,res) => {
    const { id } = req.params;

    db.viewSubAllChildren(id)
    .then(button => {
        if (button) {
            res.status(200).json({ button })
        } else {
            res.status(404).json({ message: 'record not found' })
        }
    })
    .catch(error => {
        res.status(500).json({ message: `Unable to preform operation: ${error}` })
    });
});

// ----------------Roll Content
router.get('/content/viewAll', (req, res) => {
    db.viewAllRollContent()
    .then(content => {
        res.status(200).json({
            message: `${content.length} entries in total and they are:`,
            content
        })
    })
    .then(error => {
        res.status(200).json({ message: `An error occured: ${error}` })
    });
});

router.get('/content/viewOne', (req, res) => {
    const { id } = req.params;

    db.viewRollContent(id)
    .then(content => {
        if (content) {
            res.status(200).json({ content })
        } else {
            res.status(404).json({ message: 'Record not found' })
        }
    })
    .catch(error => {
        res.status(500).json({ message: `Unable to preform operation: ${error}` })
    });
});

module.exports = router;