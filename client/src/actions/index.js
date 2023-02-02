import axios from 'axios';

export function getAllDogs() {
  return async function (dispatch) {
    try {
      let dogs = await axios.get('http://localhost:3001/dogs');
      return dispatch({
        type: 'GET_ALL_DOGS',
        payload: dogs.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    try {
      let temperaments = await axios.get('/temperaments');
      return dispatch({
        type: 'GET_TEMPERAMENTS',
        payload: temperaments.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDogByName(name) {
  return async function (dispatch) {
    try {
      let dogName = await axios.get(`/dogs?name=${name}`);
      return dispatch({
        type: 'GET_DOG_NAME',
        payload: dogName.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetailsDog(id) {
  return async function (dispatch) {
    try {
      let detailDog = await axios.get(`/dogs/${id}`);
      return dispatch({
        type: 'GET_DETAIL_DOG',
        payload: detailDog.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postNewDog(payload) {
  return async function () {
    try {
      const newDog = await axios.post('/dog', payload);
      return newDog;
    } catch (error) {
      console.log(error);
    }
  };
}

//! ------------- FILTROS -------------- !//

export function filterByTemp(temp) {
  return {
    type: 'FILTER_TEMPERAMENTS',
    payload: temp,
  };
}

export function filterByAlpha(payload) {
  return {
    type: 'FILTER_ALPHA',
    payload,
  };
}

export function filterByExistence(exc) {
  return {
    type: 'FILTER_EXISTENCE',
    payload: exc,
  };
}

export function sort(value) {
  return {
    type: 'SORT',
    payload: value,
  };
}
