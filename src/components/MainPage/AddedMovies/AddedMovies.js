import React, { useState, useEffect } from 'react';
import './AddedMovies.css';
import CardAddedMovies from './CardAddedMovies/CardAddedMovies';
import uuid from 'react-uuid';

const AddedMovies = ({
  addMoviesOnList,
  deleteMovieFromList,
  moveToWatchedMovies,
  moveUp,
  moveDown,
  filterByGener,
  filterMoviesByGenre,
  resetFilter
}) => {

  // function map movies or map movies filter by gener or return empty paragraf
  const showMovies = () => {

    if (addMoviesOnList.length && filterMoviesByGenre === "") {
      return addMoviesOnList.map(data => (
        <CardAddedMovies
          filterByGener={filterByGener}
          moveDown={moveDown}
          moveUp={moveUp}
          moveToWatchedMovies={moveToWatchedMovies}
          deleteMovieFromList={deleteMovieFromList}
          data={data}
          key={uuid()}
        />
      ));
    }else if (addMoviesOnList.length && filterMoviesByGenre !== "") {
      return addMoviesOnList
        .filter(movie => movie.Genre.includes(filterMoviesByGenre))
        .map(data => (
          <CardAddedMovies
            filterByGener={filterByGener}
            moveDown={moveDown}
            moveUp={moveUp}
            moveToWatchedMovies={moveToWatchedMovies}
            deleteMovieFromList={deleteMovieFromList}
            data={data}
            key={uuid()}
          />
        ));
    }else {
      return <p className="noMovie">No added movies...</p>;
    }
  };
  
  return (
    <>
      <div className="addAndFilter">
        <h2 className="darkViolet">To Watch</h2>
        <div className = 'filterBtn'>
        <p>Reset genre</p>
        <img 
          src="https://bit.ly/2Q5sn3U" 
          alt="filter_icon" 
          onClick={e => {
            e.preventDefault();
            resetFilter();
          }}
        />
      </div>
      </div>
      <section className="moviesToWatch">{showMovies()}</section>
    </>
  );
};

export default AddedMovies;

