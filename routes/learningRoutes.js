const express = require('express');
const Lessons = require('../models/dbfunc');

const router = express.Router();




router.post('/api/lessons', (req, res) => {
    Lessons.add(req.body)
        .then(lesson => {
            res.status(200).json(lesson);
        })
        .catch(error => {
            res.status(500).json({message: "I am broken"});
        });
});


router.get('/api/lessons', (req, res) => {
    Lessons.find()
    .then(lessons => {
        res.status(200).json(lessons);
    })
    .catch(error => {
        res.status(500).json({message: "unable to get users"});
    });
});

router.get('/api/lessons/:id', (req,res) => {
    const { id } = req.params;

    Lessons.findById(id)
    .then(lesson => {
        if (lesson) {
            res.status(200).json(lesson)
        } else {
            res.status(404).json({ message: "record not found" })
        }
    })
    .catch(error => {
        res.status(500).json({message: `unable to perform operation`})
    })
});

router.delete('/api/lessons/:id', (req, res) => {
    const { id } = req.params;

    Lessons.remove(id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: `Successfully removed ${count} row(s)`})
            } else {
                res.status(404).json({ message: "unable to remove record or record does not exist"})
            }
        })
        .catch(error => {
            res.status(500).json({message: `unable to preform operation: ${error}`})
        });
});

router.patch('/api/lessons/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Lessons.update(id, changes)
    .then(lesson => {
        if (lesson) {
            res.status(200).json({lesson})
        } else {
            res.status(404).json({ message: "record not found" })
        }
    })
    .catch(error => {
        res.status(500).json({ messsage: `error updating record: ${error}`})
    })
});




module.exports = router;