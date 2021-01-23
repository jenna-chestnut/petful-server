const express = require('express');
const PeopleQ = require('../Services/people-service');

const peopleRouter = express.Router();

peopleRouter
  .route('/')
  .get((req, res, next) => {
    let peopleList = PeopleQ.all();
    res.status(200).json(peopleList);
  })
  .post((req, res, next) => {
    let { name } = req.body;
    PeopleQ.enqueue(name);

    let peopleList = PeopleQ.all();
    res.status(201).json(peopleList[peopleList.length - 1]);
  });

module.exports = peopleRouter;