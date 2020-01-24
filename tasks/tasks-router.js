const express = require('express');
const router = express.Router();

const Tasks = require('./tasks-model');

router.get('/', (req, res) => {
    Tasks.find()
    .then(tasks => {
      tasks = tasks.map((task) => {
        return {
          ...task,
          completed: !!task.completed
        }
      });
      res.status(200).json(tasks)
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({message: 'Could not retrieve the tasks.'})
    })
});

router.post('/', (req, res) => {
    Tasks.insert(req.body)
    .then(task => {
      task.completed = !!task.completed
      res.status(201).json(task)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({message: 'Could not post new task.'})
    })
});

module.exports = router;