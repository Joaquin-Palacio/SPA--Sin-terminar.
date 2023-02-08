import React from 'react';

export const Card = ({ name, image, temperaments }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt='imagen_perro' />
      <h2>Temperamentos:</h2>
      <h3>
        {function (temperaments) {
          if (typeof temperaments === 'string') return temperaments;
          if (Array.isArray(temperaments)) {
            let temps = temperaments.map((e) => e.name);
            return temps.join(', ');
          }
        }(temperaments)}
      </h3>
    </div>
  );
};
