import React from 'react';
import './CardWatchedMovies.css';
import axios from 'axios';
import { baseUrlFirebaseWatchedMovies } from '../../../comunicator';

const CardWatchedMovies = ({data, getWatchedMovies}) => {

   const deleteMovieFromList = (id) => {
        axios.delete(`${baseUrlFirebaseWatchedMovies}/${id}.json`)
        .then(data => (data.status === 200 || data.status === 201) && getWatchedMovies())
        .catch(error => alert(error));
  };

  return (
      <section className="toWatchMovie">
      <div className='rating'>
        <p>{data.imdbRating}</p>
      </div>
          <div className='details'>
            <p className='title'>{data.Title}</p>
            <p className='genre'>{data.Genre}</p>
          </div>

          <div className = "btn">
            <button 
              onClick={() => deleteMovieFromList(data.id)} >
              <img src = "https://bit.ly/3tHSLib" alt = "delete_icon" />
            </button>
          </div>
      </section>
  );
}

export default CardWatchedMovies;