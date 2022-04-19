const express = require('express');
const session = require('express-session')

const server = express();

const sessionConfig = {
    name: 'dm_tool', // Name of Cookie
    secret: process.env.SECRET, // Secret tat makes cookie effective
    cookie: {
        maxAge: 1000 * 60 * 60, // Time span of cookie life
        secure: process.env.COOKIESECURE, // Allows cookie to be valid when created on http(false) or https (true)
        httpOnly: true // No access from JavaScript
    },
    resave: false, // Allows to be resaved each pass
    saveUnititialized: process.env.SAVEUNITITIALIZED // GDPR laws cookies cannot be saved without client conscient
}

var bodyParser = require('body-parser');
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: "50mb", extended:true, parameterLimit: 50000}));

server.use(express.json());
server.use(session(sessionConfig))

const learningRouter = require('./routes/learningRoutes')
const spellsRouter = require('./routes/spellRoutes')
const adminRouter = require('./routes/adminRoutes')

server.get('/', (req, res) => {
    res.json({message : "Welcome to DM Tool's API!"});
});

server.use('/api/lessons', learningRouter)
server.use('/api/spells', spellsRouter)
server.use('/api/admin', adminRouter)


module.exports = server;