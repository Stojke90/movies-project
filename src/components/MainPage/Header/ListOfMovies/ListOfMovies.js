import React from 'react';
import './ListOfMovies.css';

const ListOfMovies = ({data, getMovieDetails}) => {

  return (
	      	<article className="searchMovie">
	      		<p className="movieName">{data.Title}</p>
	      		<button className="addBtn" onClick={() => getMovieDetails(data.imdbID)}>add</button>
	      	</article>
  );
}

export default ListOfMovies;