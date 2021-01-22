const express = require('express');
const PeopleQ = require('../Services/people-service');
const PetQ = require('../Services/pet-service');

const petRouter = express.Router();

petRouter
  .route('/')
  .get((req, res, next) => {
    let pets = PetQ.get();
    return res.status(200).json(pets);
  });

petRouter
  .route('/:pet')
  .delete((req, res, next) => {
    let pet = req.params.pet;
    let newFam = {};
    try {
      newFam.pet = PetQ.adopt(pet);
      newFam.owner = PeopleQ.dequeue();
    } catch (e) {
      return res.status(400).json(e.message);
    }

    return res.status(200).json(newFam);
  });

module.exports = petRouter;