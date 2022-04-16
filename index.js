// const express = require('express');
// const server = express();

require('dotenv').config();
const server = require('./server')

const port = process.env.PORT;

// server.get('/', (req, res) => {
//     res.json({message : "Welcome to DM Tool's API!"});
// });

server.listen(port, () => {
    console.log(`server is running on: http://localhost:/${port}`)
})