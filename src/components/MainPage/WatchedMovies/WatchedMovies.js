import React from 'react';
import './WatchedMovies.css';
import CardWatchedMovies from "./CardWatchedMovies/CardWatchedMovies";
import uuid from 'react-uuid';


const WatchedMovies = ({watchedMovies, getWatchedMovies}) => {

  return (
	  	<>
		  	<div className = "textWatched">
		  		<h2 className="darkViolet">Watched Movies</h2>
		  	</div>
		  	
		    <section className = "conteinerForWatchedMovies">
		    	{
		    		watchedMovies.length ?
		    			watchedMovies.map(data => 
		    				<CardWatchedMovies 
							key={uuid()} 
							data={data} 
							getWatchedMovies={getWatchedMovies}/>) : 
		    			<p className="noMovie">No movies watched....</p>
		    	}
		    </section>
	    </>
  );
}

export default WatchedMovies;