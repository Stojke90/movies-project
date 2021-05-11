import React from 'react';
import './MainPage.css';
import Header from './Header/Header';
import AddedMovies from "./AddedMovies/AddedMovies";
import WatchedMovies from "./WatchedMovies/WatchedMovies";

const MainPage = () => {
  return (
      <>
      	<Header />
      	<AddedMovies />
      	<WatchedMovies />
      </>
  );
}

export default MainPage;