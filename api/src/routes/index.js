const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('../controllers/dogsController');
const temperaments = require('../controllers/tempController');
const newDog = require('../controllers/addDogController');
const byeDog = require('../controllers/deleteDogController');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs);
router.use('/temperaments', temperaments);
router.use('/dog', newDog);
router.use('/delete', byeDog);

module.exports = router;
