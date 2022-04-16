const express = require('express');

const server = express();

const PORT = 5000;

server.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to DM Tool" })
});

server.listen(5000, () => {
    console.log(`I am here, on: http://localhost:${PORT}`)
});