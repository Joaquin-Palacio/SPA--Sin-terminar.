import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div>
      <h1>Bienvenidos amantes de los perros</h1>
      <Link to={'/home'}>
        <button>
          Vamo a Darle
        </button>
      </Link>
    </div>
  )
}
