const express = require('express');
const router = express.Router();

const Resources = require('./resources-model');

router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {
      resources = resources.map((resource) => {
        return {
          ...resource,
          completed: !!resource.completed
        }
      });
      res.status(200).json(resources)
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({message: 'Could not retrieve the resources.'})
    })
});

router.post('/', (req, res) => {
    Resources.insert(req.body)
    .then(resource => {
      resource.completed = !!resource.completed
      res.status(201).json(resource)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({message: 'Could not post new resource.'})
    })
});

module.exports = router;