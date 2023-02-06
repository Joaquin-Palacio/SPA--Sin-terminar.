import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterByTemp,
  getAllDogs,
  filterByExistence,
  filterByAlpha,
  filterByHeight,
  filterByWeight,
} from '../actions/index';
import { Link } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();
  /* const allDogs = useSelector((state) => state.dogs); */
  const temperaments = useSelector((state) => state.temperaments);

  const [order, setOrder] = useState('');

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllDogs());
  };

  const handleFilterTemp = (e) => {
    e.preventDefault();
    dispatch(filterByTemp(e.target.value));
  };

  const handleFilterWeight = (e) => {
    e.preventDefault();
    dispatch(filterByWeight(e.target.value));
  };

  return (
    <div>
      <Link to={'/dog'}>Add new Dog</Link>
      <h1>The Beutifoul Dogs</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload Dogs
      </button>
      <div>
        <select name='temperaments' onChange={(e) => handleFilterTemp(e)}>
          <option value={'all'}>All Temperaments</option>
          {temperaments?.map((t) => {
            return <option value={t.name}>{t.name}</option>;
          })}
        </select>

        <select name='weight' onChange={(e) => handleFilterWeight(e)}>
          <option disabled={order}>Selecciona el peso</option>
          <option value='asc'>Más Livianos</option>
          <option value='desc'>Más pesados</option>
        </select>
      </div>
      </div>
  );
};
