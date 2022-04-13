const express = require('express');
const app = express();
app.use(express.json());

const learningRouter = require('../Routes/learningRoutes')
const spellsRouter = require('../Routes/spellRoutes')

app.get('/', (req, res) => {
    res.json({message : "I am here"});
});

app.use('/api/lessons', learningRouter)
app.use('/api/spells', spellsRouter)

module.exports = app;