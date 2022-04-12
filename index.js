// const app = require('express')();

// const express = require('express');
// const app = express()
// const PORT = 8080

// import test from './data/object/NarrowMissMagic.js'

// app.use( express.json() )

// app.listen(
//     PORT,
//     () => console.log(`it lives! http://localhost:${PORT}`)
// )

// app.get('/tshirt', (req, res) => {
//     res.status(200).send({
//         tshirt: "red",
//         size:"large"
//     })
// });

// app.get('/test12', (req, res) => {
//     res.status(200).send(test)
// })

// app.post('/tshirt/:id', (req, res) => {

//     const { id } = req.params;
//     const { logo } = req.body;

//     if(!logo) {
//         res.status(418).send({ message: 'Need logo!' })
//     }

//     res.send({
//         tshirt: `red with your ${logo} and ID of ${id}`
//     });

// });


// -------------------------------------- I am MAIN LIVING FILE--------------------------------------
// import express from 'express';
// import bodyParser from 'body-parser';

// import usersRoutes from './routes/users.js' ///new

// const Lessons = require('./models/dbfunc')
// // import Lessons from './models/dbfunc.js'

// const app = express();
// const PORT = 5000;

// app.use(bodyParser.json());

// app.use('/users', usersRoutes);

// app.get('/', (req, res) => {
//     console.log('test');

//     res.send('I am test homepage, I sent')
// });

// app.post('/users/api', (req, res) => {
//     Lessons.add(req.body)
//     .then(lesson => {
//         res.status(200).json(lesson)
//     })
//     .catch(error => {
//         res.status(500).json({ message: "it dont work!!"})
//     })
// });

// app.listen(PORT, () => console.log(`lives! ... on http://localhost:${PORT}`));


// -------------------------------------- I am TEST FILE--------------------------------------
const express = require('express');
const Lessons = require('./models/dbfunc')
const db = require('./models/dbfunc')
const app = express();

app.use(express.json());

const PORT = 5000;

app.get('/', (req, res) => {
    res.json({message : "I am here"});
});

app.post('/api/lessons', (req, res) => {
    Lessons.add(req.body)
        .then(lesson => {
            res.status(200).json(lesson);
        })
        .catch(error => {
            res.status(500).json({message: "I am broken"});
        });
});

app.post('/api/buttons/addMany', (req, res) => {
    db.addMany(req.body)
        .then(diceButtons => {
            res.status(200).json(diceButtons);
        })
        .catch(error => {
            res.status(500).json({ message: `Unable to upload buttons: ${error}`})
        })
});


app.get('/api/lessons', (req, res) => {
    Lessons.find()
    .then(lessons => {
        res.status(200).json(lessons);
    })
    .catch(error => {
        res.status(500).json({message: "unable to get users"});
    });
});

app.get('/api/lessons/:id', (req,res) => {
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

app.delete('/api/lessons/:id', (req, res) => {
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

app.patch('/api/lessons/:id', (req, res) => {
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




app.listen(PORT, () => {
    console.log(`server is running on: http://localhost:/${PORT}`)
})