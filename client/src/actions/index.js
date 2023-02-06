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
      let newDog = await axios.post('/dog', payload);
      return newDog;
    } catch (error) {
      console.log(error);
    }
  };
}

export function putDog(id, payload) {
  return async function () {
    try {
      let editDog = await axios.put(`/edit/${id}`, payload);
      return editDog;
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteDog(id) {
  return async function (dispatch) {
    try {
      let dropDog = await axios.delete(`/delete/${id}`);
      return dispatch({
        type: 'DELETE_DOG',
        payload: dropDog,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//! ------------- FILTROS -------------- !//

export function filterByTemp(payload) {
  return {
    type: 'FILTER_TEMPERAMENTS',
    payload: payload,
  };
}

export function filterByAlpha(payload) {
  return {
    type: 'FILTER_ALPHA',
    payload,
  };
}

export function filterByExistence(payload) {
  return {
    type: 'FILTER_EXISTENCE',
    payload: payload,
  };
}

export function filterByWeight(payload) {
  return {
    type: 'FILTER_WEIGHT',
    payload: payload
  };
}

export function filterByHeight(payload) {
  return {
    type: 'FILTER_HEIGHT',
    payload: payload
  }
}
