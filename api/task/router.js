// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Task.get()
    .then(esp => {
      res.status(200).json(esp);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Task.get(req.params.id)
    .then(esp => {
      res.status(200).json(esp);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Task.post(req.body)
    .then(esp => {
      res.status(201).json(esp);
    })
    .catch(next);
});

module.exports = router;