import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByTemp, getDogs } from '../actions';
import { Link } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getDogs());
  };

  const handleFilterTemp = (e) => {
    e.preventDefault();
    dispatch(filterByTemp(e.target.value));
  };

  return (
    <div>
      <Link to={'/dog'}>Add new Dog</Link>
      <h1>The Beutifoul Dogs</h1>
      <button onClick={(e) => {handleClick(e)}}>
        Reload Dogs
      </button>
      <div>
        <select name='temperaments' onChange={(e) => handleFilterTemp(e)}>
          <option value={'all'}>All Temperaments</option>
          {temperaments?.map((t) => {
            return <option value={t.name}>{t.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
