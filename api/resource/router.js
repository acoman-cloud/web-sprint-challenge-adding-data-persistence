// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Resource.get()
    .then(esp => {
      res.status(200).json(esp);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Resource.post(req.body)
    .then(esp => {
      res.status(201).json(esp);
    })
    .catch(next);
});

module.exports = router;