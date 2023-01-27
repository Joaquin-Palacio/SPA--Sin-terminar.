const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { API_KEY } = process.env;

//! --------------------- Controllers ------------------------- !//

//? Traemos los datos que necesitamos de la api
const getDogsApi = async () => {
  const callApi = await axios.get(
    `https://api.thedogapi.com/v1/breeds?${API_KEY}`
  );
  const dataApi = await callApi.data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      lifeSpan: e.life_span.slice(0, 7),
      weightMin: parseInt(e.weight.metric.slice(0, 2)),
      weightMax: parseInt(e.weight.metric.slice(4)),
      heightMin: parseInt(e.height.metric.slice(0, 2)),
      heightMax: parseInt(e.height.metric.slice(4)),
      temperaments: e.temperament
        ? e.temperament
        : `Sorry. No information about temperaments of the ${e.name} breed`,
      image: e.image.url,
    };
  });
  return dataApi;
};

//? Traemos los datos necesarios desde la base de datos
const getDogsDb = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
};

//? Juntamos los datos de la api con los de la base de datos
const getAllDogs = async () => {
  let dataApi = await getDogsApi();
  let dataDb = await getDogsDb();

  let allData = dataApi.concat(dataDb);
  return allData;
};

module.exports = { getAllDogs };