const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: "50mb", extended:true, parameterLimit: 50000}));

app.use(express.json());

const learningRouter = require('../Routes/learningRoutes')
const spellsRouter = require('../Routes/spellRoutes')

app.get('/', (req, res) => {
    res.json({message : "I am here"});
});

app.use('/api/lessons', learningRouter)
app.use('/api/spells', spellsRouter)

module.exports = app;