const express = require('express');

const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.json("It's just a prank, bro");
});

server.use('/api/projects', ProjectRouter);

module.exports = server;