import React from 'react';
import './WatchedMovies.css';
import CardWatchedMovies from "./CardWatchedMovies/CardWatchedMovies"

const WatchedMovies = () => {
  return (
      <section className = "conteinerForWatchedMovies">
      	<div className = "textWatched"><h2>Watched Movies</h2></div>
      	<CardWatchedMovies />
      </section>
  );
}

export default WatchedMovies;