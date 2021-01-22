const express = require('express');
const PeopleQ = require('../Services/people-service');

const peopleRouter = express.Router();

peopleRouter
  .route('/')
  .get((req, res, next) => {
    let peopleList = PeopleQ.get();
    res.json(peopleList);
  })
  .post((req, res, next) => {
    let { newPerson } = req.body;
    PeopleQ.enqueue(newPerson);
    res(201).json(newPerson);
  });

module.exports = peopleRouter;