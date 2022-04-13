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
require('dotenv').config();
const app = require('./api/server')

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on: http://localhost:/${port}`)
})