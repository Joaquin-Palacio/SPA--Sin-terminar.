const express = require('express');
const router = express.Router();
const { Dog, Temperament } = require('../db');

// Ruta para agregar/crear un perro
router.post('/', async (req, res, next) => {
  const {
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    lifeSpan,
    image,
    temperament,
  } = req.body;

  try {
    let createDog = await Dog.create({
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      lifeSpan,
      image,
      createdInDb: true,
    });

    let temperamentDb = await Temperament.findAll({
      where: {
        name: temperament,
      },
    });

    createDog.addTemperament(temperamentDb);
    res.send(`the dog ${req.body.name} has been added successfully`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;