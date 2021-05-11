import React from 'react';
import './ListOfMovies.css';


const ListOfMovies = ({listOfMovies}) => {
console.log(listOfMovies)
  return (

      	<section className="listOfSearchMovies">
	      	<article className="searchMovie">
	      		<p className="movieName">{listOfMovies[0].Title}</p>
	      		<button className="addBtn">add</button>
	      	</article>
	    </section>
  );
}

export default ListOfMovies;