// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Project.get()
    .then(esp => {
      res.status(200).json(esp);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Project.post(req.body)
    .then(esp => {
      res.status(201).json(esp);
    })
    .catch(next);
});

module.exports = router;