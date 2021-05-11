import React, { useState, useEffect } from 'react';
import './Header.css';
import ListOfMovies from './ListOfMovies/ListOfMovies';
import axios from 'axios';

const Header = () => {
	const [movieName, setMovieName] = useState('');
	const [listmovieName, setListMovieName] = useState([]);


	const getMoviesFromServer = () => {
		axios.get(`http://www.omdbapi.com/?apikey=d8f5df00&s=${movieName}`)
		.then(data => setListMovieName(data.data.Search));
	}
	useEffect(() => {
		getMoviesFromServer();
	},[movieName])

  return (
      <header className="header">
    
	      	<h1>WatchList</h1>
	      	<input 
		      	className="searchInput" 
		      	type='text' 
		      	name='search' 
		      	placeholder='Search movie...' 
		      	onChange={e => setMovieName(e.target.value)} 
		      	value={movieName}
	      	/>
      	{movieName && <ListOfMovies listOfMovies={listmovieName}/>}
      </header>
  );
}

export default Header;