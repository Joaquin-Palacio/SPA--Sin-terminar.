const { Router } = require('express');
const router = Router();
const { Dog } = require('../db.js');

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteDog = await Dog.findByPk(id);

    if (!deleteDog) {
      res.status(404).send('dog id not found');
    }
    await deleteDog.destroy();
    res.send('the dog was deleted');
  } catch (error) {
    next(error);
  }
});

module.exports = router;