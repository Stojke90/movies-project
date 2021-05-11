import React from 'react';
import './CardWatchedMovies.css';

const CardWatchedMovies = () => {
  return (
      <section className="toWatchMovie">
  		  <div className = "tumnbnails" >
          	<img  src="https://via.placeholder.com/150" alt = "picture_of_movie"/>
          </div>
          <div className = 'genre' >
            <p>vvds</p>
            <p>dddff</p>
            <p>ddgsvvs</p>
            <p>vvds</p>
            <p>dddff</p>
            <p>ddgsvvs</p>
          </div>
          <div className = "btn" >
            <button><img src = "https://bit.ly/3f2I2JO" alt = "delete_image" /></button>
          </div>
        </section>
  );
}

export default CardWatchedMovies;