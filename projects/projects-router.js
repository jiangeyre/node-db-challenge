const express = require('express');
const router = express.Router();

const Projects = require('./projects-model');

router.get('/', (req, res) => {
    Projects.find()
        .then(projs => {
            projs = projs.map((proj) => {
                return {
                    ...proj,
                    completed: !!proj.completed
                }
            });
            res.status(200).json(projects)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Could not retrieve the projects.'
            })
        })
});

router.get('/:id/resources', (req, res) => {
    const { id } = req.params.id;
    
    Projects.findResource(id)
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Could not get that specific Project ID.'
            })
        })
});

router.post('/', (req, res) => {
    Projects.insert(req.body)
        .then(proj => {
            proj.completed = !!proj.completed;
            res.status(201).json(proj);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Could not create new project.'
            })
        })
});

router.post('/:id/resources', (req, res) => {
    Projects.insertResource()
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Could not post new resource.'
            })
        })
});

module.exports = router;