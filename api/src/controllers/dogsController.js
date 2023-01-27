const express = require('express');
const router = express.Router();

//Importamos el service, donde tenemos todos los perros
const { getAllDogs } = require('../service/index');

// Ruta que trae los perros por nombre
router.get('/', async (req, res, next) => {
  const name = req.query.name;
  try {
    let allDogs = await getAllDogs();
    if (name) {
      let dogName = await allDogs.filter((d) =>
        d.name.toLowerCase().includes(name.toLocaleLowerCase())
      );
      dogName.length
        ? res.status(200).send(dogName)
        : res.status(404).send('dog not found');
    } else {
      res.status(200).send(allDogs);
    }
  } catch (error) {
    next(error);
  }
});


// Ruta que trae a un perro por su id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let allDogs = await getAllDogs();
    if (id) {
      let dog = await allDogs.filter((dog) => dog.id == id);
      dog.length
        ? res.status(200).send(dog)
        : res.status(404).send('dog not found');
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;