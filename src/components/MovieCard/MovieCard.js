import React, { useState, useEffect } from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrlFirebase } from '../comunicator';
import uuid from 'react-uuid';

const MovieCard = (props) => {

  const[movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    // movie find by id and print data about movie
    axios.get(`${baseUrlFirebase}/${props.match.params.id}.json`)
    .then(results => setMovieDetails(results.data))
  },[props.match.params.id]);

  return (
    <div className="wraperMovieCard">
      <div className="head">
        <Link to="/">
          <button className = "btnBack" >Back</button>
        </Link>
        <p className="titleCard font900">To Watch / {movieDetails.Title}</p>
      </div>

      <section className = "movieCard">
        
      	<div className = "wraperImg">
          <img className = "imgMovie" src = {movieDetails.Poster} alt = 'movie_image'/>
        </div>

      	<article className = "movieData">
      		<p className="height">
            <span className="font900">Released Date:</span> 
            {movieDetails.Released}
          </p>
          <p className="height">
            <span className="font900">Runtime:</span> 
            {movieDetails.Runtime}
          </p>
      		<p className="height">
            <span className="font900">Genre:</span> 
            {movieDetails.Genre}
          </p>
      		<p className="height">
            <span className="font900">Director:</span> 
            {movieDetails.Director}
          </p>
      		<div className='wraperForActors'>
            <span className="font900" >Actors:</span>
            <div>
            {movieDetails.Actors ? movieDetails.Actors.split(',')
            .map(data => 
              <p className="height" key={uuid()}>{data}</p>) : null}
            </div>
          </div>
      		<p className="height">
            <span className="font900">Plot: <br/></span> 
            {movieDetails.Plot}
          </p>
      	</article>

        <div className="wrapRating">
          <p className="ratingCard">
            {movieDetails.imdbRating}
          </p>
        </div>
      </section>
    </div>
  );
}

export default MovieCard;