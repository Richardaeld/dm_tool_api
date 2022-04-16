const express = require('express');

const server = express();

const port = process.env.PORT;

server.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to DM Tool" })
});

server.listen(port, () => {
    console.log(`I am here, on: http://localhost:${port}`)
});