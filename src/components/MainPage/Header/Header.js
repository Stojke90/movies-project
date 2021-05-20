import React, { useState, useEffect } from 'react';
import './Header.css';
import ListOfMovies from './ListOfMovies/ListOfMovies';
import axios from 'axios';
import uuid from 'react-uuid';
import { baseUrlOmdbApi } from '../../comunicator';

const Header = ({listOfMovies, sendMoviesDetailsOnFirebase}) => {
	// input value, value for search movies
	const [moviesName, setMoviesName] = useState('');
	// list of movies from input search
	const [listmoviesName, setListMoviesNames] = useState([]);
	// state for if movies exist in our database, they are not displayed in the list
	const[checkMovieList, setCheckMovieList] = useState([]);

	useEffect(() => {
	// get movies names from sever
		axios.get(`${baseUrlOmdbApi}&s=${moviesName}`)
		.then(data => 
			(data.status === 200 || data.status === 201) 
				&& setListMoviesNames(data.data.Search))
		.catch(error => alert(error));

	},[moviesName]);

	// get details about chose movie
	const getMovieDetails = (imdbID) => {
	  axios.get(`${baseUrlOmdbApi}&i=${imdbID}`)
	  .then(results => 
	  	(results.status === 200 || results.status === 201) 
	  		&& sendMoviesDetailsOnFirebase(results.data))
	  .catch(error => alert(error));
	  setMoviesName('');
	};
	// filter movies list,dont show repetitive movie with same imdbID
	useEffect(() =>{
		if(listmoviesName){
		setCheckMovieList(listmoviesName.filter(data => {
			for(let i = 0; listOfMovies.length > i; i++){
				if(data.imdbID === listOfMovies[i].imdbID){
					return false;
				}
			}
			return true;
		}))
		}

	},[listmoviesName,listOfMovies])

  return (
      <header className="header">
    
	      	<h1>Movie Watchlist</h1>
	      	<input 
		      	className="searchInput" 
		      	type='text' 
		      	name='search' 
		      	placeholder='Search movie...' 
		      	onChange={e => setMoviesName(e.target.value)} 
		      	value={moviesName}
	      	/>

	      	{listmoviesName && <section className="listOfSearchMovies">
				{(checkMovieList !== undefined) ?
					(checkMovieList.map(data => 
						<ListOfMovies 
				  			getMovieDetails={getMovieDetails} 
				  			data={data} 
				  			key={uuid()} 
				  		/>)) 
					: null }
	      		
      	 	</section>}
      </header>
  );
}

export default Header;