const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const learningRouter = require('./routes/learningRoutes');
const spellsRouter = require('./routes/spellRoutes');
const adminRouter = require('./routes/adminRoutes');
const authRouter = require('./auth/authRoutes');
const restricted = require('./auth/restrictedMiddleware')


const server = express();
server.use(helmet());
server.use(cors());
server.use(logger('dev'))

// Allow for larger than normal json submission
var bodyParser = require('body-parser');
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: "50mb", extended:true, parameterLimit: 50000}));

server.use(express.json());

server.get('/', (req, res) => {
    res.json({message : "Welcome to DM Tool's API!"});
});

server.use('/api/auth', authRouter);
server.use('/api/lessons', restricted, learningRouter);
server.use('/api/spells', restricted, spellsRouter);
server.use('/api/admin', restricted, adminRouter);

module.exports = server;