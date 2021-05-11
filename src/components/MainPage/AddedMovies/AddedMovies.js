import React from 'react';
import './AddedMovies.css';
import CardAddedMovies from './CardAddedMovies/CardAddedMovies';


const AddedMovies = () => {
  return (
      <section className="moviesToWatch">
        <div className = "addAndFilter" >
          <h2>Added Movies</h2>
          <img src="https://bit.ly/2Q5sn3U" alt="filter_img" />
        </div>
        <CardAddedMovies />
      </section>
  );
}

export default AddedMovies;