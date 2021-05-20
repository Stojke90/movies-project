import React, { useState, useEffect } from "react";
import "./MainPage.css";

import Header from "./Header/Header";
import AddedMovies from "./AddedMovies/AddedMovies";
import WatchedMovies from "./WatchedMovies/WatchedMovies";

import axios from "axios";
import { baseUrlFirebase, baseUrlFirebaseWatchedMovies } from "../comunicator";

const MainPage = () => {
  // state for added movies from firebase
  const [addMoviesOnList, setAddMoviesOnList] = useState([]);

  // state for watched movie from firebase
  const [watchedMovies, setWatchedMovies] = useState([]);

  // state for moveUp movie
  const [filterMoveUp, setFilterMoveUp] = useState([]);

  // state for moveDown movie
  const [filterMoveDown, setFilterMoveDown] = useState([]);

  // filter movies by genre selected
  const [filterMoviesByGenre, setFilterMoviesByGenre] = useState('');

  // put movie details on our server,firebase
  const sendMoviesDetailsOnFirebase = (data) => {
    axios.post(`${baseUrlFirebase}.json`, JSON.stringify(data))
      .then((data) =>(data.status === 200 || data.status === 201) && getMoviesFromFirebase())
      .catch((error) => alert(error));
  };

  // function for took all movies from firebase and put on our page added movies
  const getMoviesFromFirebase = () => {
    axios.get(`${baseUrlFirebase}.json`)
      .then((results) => {
        const moviesDetails = [];
        for (const key in results.data) {
          moviesDetails.unshift({
            ...results.data[key],id: key});
        }
        setAddMoviesOnList(moviesDetails);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getMoviesFromFirebase();
  }, []);

  // deleted movie found using id,deleted from firebase
  const deleteMovieFromList = (id) => {
    axios.delete(`${baseUrlFirebase}/${id}.json`)
      .then((data) =>(data.status === 200 || data.status === 201) && getMoviesFromFirebase())
      .catch((error) => alert(error));
  };

  // send watched movie on firebase
  const moveToWatchedMovies = (data) => {
    axios.post(`${baseUrlFirebaseWatchedMovies}.json`,JSON.stringify(data))
      .then((response) => {(response.status === 200 || response.status === 201) &&
          deleteMovieFromList(data.id);
        getWatchedMovies();
      })
      .catch((error) => alert(error));
  };

  // get watched movie from firebase and put on watched movies
  const getWatchedMovies = () => {
    axios.get(`${baseUrlFirebaseWatchedMovies}.json`)
      .then((results) => {
        const moviesDetails = [];
        for (const key in results.data) {
          moviesDetails.unshift({
            ...results.data[key],id: key,});
        }
        setWatchedMovies(moviesDetails);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getWatchedMovies();
  }, []);

  // move up movie on the list
  const moveUp = (imd) => {
    const index = addMoviesOnList.findIndex(data => data.imdbID === imd);
      if (index > 0) {
        let el = addMoviesOnList[index];
        addMoviesOnList[index] = addMoviesOnList[index - 1];
        addMoviesOnList[index - 1] = el;
      }else if(index === 0) {
      	return false;
      }
    setFilterMoveUp(addMoviesOnList);
    setFilterMoveDown([]);
  };

  // move down movie on the list
  const moveDown = (imd) => {
    const index = addMoviesOnList.findIndex(data => data.imdbID === imd);
      if (index !== -1 && index < addMoviesOnList.length - 1){
        let el = addMoviesOnList[index];
        addMoviesOnList[index] = addMoviesOnList[index + 1];
        addMoviesOnList[index + 1] = el;
      }else if(index === addMoviesOnList.length - 1) {
      	return false;
      }
    setFilterMoveDown(addMoviesOnList);
    setFilterMoveDown([]);
  };

  // reset filter for genre and moveUp and moveDown movie
  const resetFilter = () => {
    setFilterMoviesByGenre('');
    setFilterMoveUp([]);
    setFilterMoveDown([]);
  }

  // set movie by gener
  const filterByGener = (data) => {
    setFilterMoviesByGenre(data);
  };

  return (
    <>
      <Header
        sendMoviesDetailsOnFirebase={sendMoviesDetailsOnFirebase}
        listOfMovies={addMoviesOnList}
      />
      <AddedMovies
        resetFilter={resetFilter}
        filterMoviesByGenre={filterMoviesByGenre}
        filterByGener={filterByGener}
        moveDown={moveDown}
        moveUp={moveUp}
        moveToWatchedMovies={moveToWatchedMovies}
        deleteMovieFromList={deleteMovieFromList}
        addMoviesOnList={addMoviesOnList}
      />
      <WatchedMovies
        watchedMovies={watchedMovies}
        getWatchedMovies={getWatchedMovies}
      />
    </>
  );
};

export default MainPage;