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

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log('test');

    res.send('I am test homepage, I sent')
});

app.listen(PORT, () => console.log(`lives! ... on http://localhost:${PORT}`));