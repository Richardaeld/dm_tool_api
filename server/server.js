const express = require('express');
const server = express();

// var bodyParser = require('body-parser');
// server.use(bodyParser.json({limit: '50mb'}));
// server.use(bodyParser.urlencoded({limit: "50mb", extended:true, parameterLimit: 50000}));

server.use(express.json());

const learningRouter = require('../Routes/learningRoutes')
const spellsRouter = require('../Routes/spellRoutes')

server.get('/', (req, res) => {
    res.json({message : "Welcome to DM Tool's API!"});
});

// server.use('/api/lessons', learningRouter)
// server.use('/api/spells', spellsRouter)

module.exports = server;