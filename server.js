const express = require('express');
const server = express();
const helmet = require('helmet');

const ProjectRouter = require('./projects/projects-router');

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Something is wrong. Please check again."
    })
});

server.get('/', (req, res) => {
    res.send('You have loaded successfully on to the Node-DB-Challenge (Project Tracker)!')
});

module.exports = server;