import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = () => {
  return (

      <section className = "movieCard">
      	<div className = "wraperImg"><img className = "imgMovie" src ='https://pbs.twimg.com/profile_images/857849907624820740/8ewzDDjp.jpg' alt = 'movie_image'/></div>

      	<article className = "movieData">
      		<p>title</p>
      		<p>actor</p>
      		<p>movie</p>
      		<p>year</p>
      		<p>money earn</p>
      		<p>horor</p>
      	</article>
        <Link to="/">
      	<button className = "btnBack" >Back</button>
        </Link>
      </section>
  );
}

export default MovieCard;